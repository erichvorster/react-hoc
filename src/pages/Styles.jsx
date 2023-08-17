import React from "react";
import withBootstrapStyles from "../components/withBootstrapStyles";

// Your original component
const MyComponent = ({ text }) => {
  return <p>{text}</p>;
};

const MyComponentWithStyles = withBootstrapStyles(MyComponent);

function Styles() {
  return (
    <div>
      <h1>Styling</h1>
      <MyComponentWithStyles text="Hello, World!" />
    </div>
  );
}

export default Styles;
