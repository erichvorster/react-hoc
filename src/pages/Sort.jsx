import React, { useState } from "react";
import withSorting from "../components/withSorting";
import { Table } from "react-bootstrap";

const TableComp = ({ data, sortedColumn, sortOrder, onSort }) => {
  const sortedData = [...data].sort((a, b) => {
    console.log(a[sortedColumn], b[sortedColumn]);
    if (sortOrder === "asc") {
      console.log(a[sortedColumn] > b[sortedColumn] ? 1 : -1);
      return a[sortedColumn] > b[sortedColumn] ? 1 : -1;
    } else {
      console.log(a[sortedColumn] < b[sortedColumn] ? 1 : -1);
      return a[sortedColumn] < b[sortedColumn] ? 1 : -1;
    }
  });

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {/* Column headers with sorting functionality */}
          <th onClick={() => onSort("name")}>Name</th>
          <th onClick={() => onSort("age")}>Age</th>
          <th onClick={() => onSort("country")}>Country</th>
        </tr>
      </thead>
      <tbody>
        {/* Render sorted data rows */}
        {sortedData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.country}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Use the withSorting HOC to enhance the Table component
const EnhancedTable = withSorting(TableComp);

// Example data
const tableData = [
  { name: "Alice", age: 25, country: "USA" },
  { name: "Bob", age: 30, country: "Canada" },
  { name: "Cody", age: 24, country: "France" },
  { name: "Eve", age: 22, country: "Australia" },
  { name: "John", age: 28, country: "UK" },
  { name: "Maria", age: 35, country: "Brazil" },
  // Add more data...
];

// App component
const Sort = () => {
  return (
    <div>
      <h1>Sortable Table</h1>
      <EnhancedTable data={tableData} />
    </div>
  );
};

export default Sort;
