import React from "react";

const TableRow = ({ row }) => {
  return (
    <tr className="rowClass">
      {Object.values(row).map((colValue, i) => {
        return <td key={i}>{colValue}</td>;
      })}
    </tr>
  );
};

export default TableRow;
