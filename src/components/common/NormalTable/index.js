import React from "react";

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
              <td>
                <button className="view-btn btn" onClick={() => viewUser(d)}>
                  View
                </button>
                <button
                  className="delete-btn btn"
                  onClick={() => deleteUser(d)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default NormalTable;
