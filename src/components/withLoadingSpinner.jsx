import React from "react";
import { Spinner } from "react-bootstrap";

// Higher Order Component (HOC) that adds a loading spinner when isLoading is true
const withLoadingSpinner = (WrappedComponent) => {
  // This is the functional component returned by the HOC
  return function WithLoadingSpinner({ isLoading, ...props }) {
    // If isLoading is true, display a loading message
    if (isLoading) {
      return <Spinner animation="border" variant="light" />;
    }

    // Otherwise, render the WrappedComponent with its original props
    return <WrappedComponent {...props} />;
  };
};

export default withLoadingSpinner;
