import React, { useState } from "react";

// Define the withSorting HOC
const withSorting = (WrappedComponent) => {
  // Return a new component that enhances the WrappedComponent
  return function WithSorting(props) {
    // State for keeping track of the sorted column and sort order
    const [sortedColumn, setSortedColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    // Handle sorting when a column header is clicked
    const handleSort = (columnName) => {
      // Determine the new sort order based on the current state
      const newSortOrder =
        sortedColumn === columnName && sortOrder === "asc" ? "desc" : "asc";

      // Update the sorted column and sort order in the state
      setSortedColumn(columnName);
      setSortOrder(newSortOrder);
    };

    // Render the WrappedComponent with enhanced props
    return (
      <WrappedComponent
        // Pass the original props along with enhanced props
        {...props}
        // Provide the sorted column and sort order as props
        sortedColumn={sortedColumn}
        sortOrder={sortOrder}
        // Provide the handleSort function as a prop for sorting interaction
        onSort={handleSort}
      />
    );
  };
};

export default withSorting;
