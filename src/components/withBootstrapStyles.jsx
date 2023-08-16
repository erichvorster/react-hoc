import React from 'react';

const withBootstrapStyles = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <WrappedComponent {...props} />
          </div>
        </div>
      </div>
    );
  };
};

export default withBootstrapStyles;
