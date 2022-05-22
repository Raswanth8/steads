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
    <div className="researchtable">
      <h1>Recent Publications</h1>
      <br />
      <div style={{ height: 500, width: "75%" }}>
        <DataGrid rows={tableData} columns={columns} pageSize={10} />
      </div>
    </div>
  );
};

export default Datagrid;
