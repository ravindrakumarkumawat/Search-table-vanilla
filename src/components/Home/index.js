import React, { useState, useEffect } from "react";
import NormalTable from "../common/NormalTable";
import NormalRow from "../common/NormalRow";
import NormalCol from "../common/NormalCol";
import NormalText from "../common/NormalText";
import "./Home.css";
import NormalInput from "../common/NormalInput";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",    
  }, 
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions"
  }
]
  const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const res = await response.json();
      console.log(res);
      setData(res);
    } catch (error) {
      console.log("something went wrong!!");
    }
  };

  const search = (value) => {
    const filterTable = data.filter((o) =>
      Object.keys(o).some((k) => {
        if (Object.keys(o[k]).length === 5) {
          return Object.values(o[k])
            .join("")
            .toLowerCase()
            .includes(value.toLowerCase());
        }
        return String(o[k]).toLowerCase().includes(value.toLowerCase());
      })
    );

    setFilteredData(filterTable);
  };

  const [isSelectedUser, setIsSelectedUser] = useState(false)
  const [isDeleteUser, setIsDeleteUser] = useState(false)
  const [viewData, setViewData] = useState({});

  const viewUser = (data) => {
    setIsSelectedUser(true)
    setViewData(data)
  }

  const closeViewUser = () => {
    setViewData({})
    setIsSelectedUser(false)
  }

  const deleteUser = (data) => {
    setIsDeleteUser(true)
    setViewData(data)
  }

  const confirmUser = () => {
    if(filteredData.length > 0) {
      setFilteredData([...filteredData.filter((d) => d.id !== viewData.id)])
    }
    setData([...data.filter((d) => d.id !== viewData.id)])
    setViewData({})
    setIsDeleteUser(false)
  }

  const cancelUser = () => {
    setViewData({})
    setIsDeleteUser(false)
  }

  return (
    <div>
      <NormalRow marginTop="2rem">
        <NormalCol span={6}>
          <NormalInput onChange={search} />
        </NormalCol>
      </NormalRow>

      <div className="row">
        <div className="col">
          {/*<!-- Table container -->*/}
          <div className="table-container" style={{ overflowX: "auto" }}>
            <NormalTable 
              datasource={filteredData.length > 0 ? filteredData : data}
              columns={columns}
              viewUser={viewUser}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>

      {/*  <button id="view-btn" className="btn">
            view
      </button>*/}
      <div id="view-modal" className={`view-container ${isSelectedUser ? 'view-container-show' : 'view-container-hide'}`}>
        {/*<!-- Modal -->*/}
        <div className="view-content-container">
          <button id="view-close" className="btn" onClick={closeViewUser}>
            Close
          </button>
          <div className="content">
          <NormalRow>
          <NormalCol span={12}>
            <NormalText title={"Name"} subtitle={viewData.name} />
          </NormalCol>
          <NormalCol span={12}>
            <NormalText title={"Username"} subtitle={viewData.username} />
          </NormalCol>
        </NormalRow>
        <NormalRow marginTop={".75rem"}>
          <NormalCol span={12}>
            <NormalText title={"Email"} subtitle={viewData.email} />
          </NormalCol>
          <NormalCol span={12}>
            <NormalText title={"Phone"} subtitle={viewData.phone} />
          </NormalCol>
        </NormalRow>
        <hr />
        <NormalRow>
          <NormalCol span={12}>
            <NormalText title={"Address"} />
          </NormalCol>
        </NormalRow>
        <NormalRow marginTop={".75rem"}>
          <NormalCol span={6}>
            <NormalText
              title={"Suite"}
              subtitle={viewData.address ? viewData.address.suite : ""}
            />
          </NormalCol>
          <NormalCol span={6}>
            <NormalText
              title={"City"}
              subtitle={viewData.address ? viewData.address.city : ""}
            />
          </NormalCol>
          <NormalCol span={6}>
            <NormalText
              title={"Zipcode"}
              subtitle={viewData.address ? viewData.address.zipcode : ""}
            />
          </NormalCol>
          <NormalCol span={3}>
            <NormalText
              title={"Lat."}
              subtitle={viewData.address ? viewData.address.geo.lat : ""}
            />
          </NormalCol>
          <NormalCol span={3}>
            <NormalText
              title={"lng."}
              subtitle={viewData.address ? viewData.address.geo.lng : ""}
            />
          </NormalCol>
        </NormalRow>
        <hr />
        <NormalRow>
          <NormalCol span={12}>
            <NormalText
              title={"Company"}
              subtitle={viewData.company ? viewData.company.name : ""}
            />
          </NormalCol>
          <NormalCol span={12}>
            <NormalText title={"Website"} subtitle={viewData.website} />
          </NormalCol>
        </NormalRow>
        <NormalRow marginTop={".75rem"}>
          <NormalCol span={24}>
            <NormalText
              title={"Catch phrase"}
              subtitle={viewData.company ? viewData.company.catchPhrase : ""}
            />
          </NormalCol>
        </NormalRow>
        <NormalRow marginTop={".5rem"}>
          <NormalCol span={24}>
            <NormalText
              title={"BS"}
              subtitle={viewData.company ? viewData.company.bs : ""}
            />
          </NormalCol>
        </NormalRow>
          </div>  
        </div>
      </div>

      {/*!-- Confirm popup --*/}
      {/*!<button id="delete-btn">Delete</button>*/}
      <div id="confirm-modal" className={`confirm-container ${isDeleteUser ? 'confirm-container-show' : 'confirm-container-hide'}`}>
        <div className="confirm-content-container">
          <div className="row">
            <div className="col text-md">Do you really want to delete?</div>
          </div>
          <div className="row">
            <div className="col btn-group">
              <button id="confirm-btn" className="btn btn-1" onClick={confirmUser}>
                Delete
              </button>
              <button id="cancel-btn" className="btn" onClick={cancelUser}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
