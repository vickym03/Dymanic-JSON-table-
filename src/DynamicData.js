import React from "react";
import TableData from "./Table";

function DynamicData() {
  //table column
  const dataColumns = Object.keys(TableData[0]);
  console.log("dataColumns", dataColumns);

  const dataHeader = () => {
    return dataColumns.map((data, index) => {
      return (
        <th key="index" style={{ border: "1px solid" }}>
          {data}
        </th>
      );
    });
  };

  // get table row data
  const tdData = () => {
    return TableData.map((data) => {
      return (
        <tr>
          {dataColumns.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div>
      <table style={{ border: "1px solid", width: "100%" }}>
        <thead>
          <tr>{dataHeader()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
    </div>
  );
}

export default DynamicData;
