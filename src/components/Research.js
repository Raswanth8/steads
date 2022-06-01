import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 700 },
];

const Datagrid = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  //console.log(tableData);

  return (
    <section className="datagrid-section" id="research">
      <div className="research-table">
        <h1>
          <b>Recent Publications</b>
        </h1>
        <br />
        <div style={{ height: 560, width: "100%" }}>
          <DataGrid rows={tableData} columns={columns} pageSize={8} />
        </div>
      </div>
    </section>
  );
};

export default Datagrid;
