import React from "react";
import NormalButton from "../NormalButton";

const NormalTable = ({ datasource, columns, viewUser, deleteUser }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((c) => <th>{c.title}</th>)}
        </tr>
      </thead>
      <tbody id="my-table">
        {datasource.length > 0 &&
          datasource.map((d) => (
            <tr>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>{d.address ? d.address.street : ""}</td>
              <td className="actions-btn">
                <NormalButton btntype={"primary"} name={"View"} handleAction={viewUser} selected={d}/>
                <span className="gap-2"/>
                <NormalButton name={"Delete"} handleAction={deleteUser} selected={d}/>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default NormalTable;
