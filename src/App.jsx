import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./pages/Loader";
import Sort from "./pages/Sort";
import Styles from "./pages/Styles";

const App = () => {
  const [example, setExample] = useState("loader");

  return (
    <>
      <Card body className="m-5">
        <div className="toggle mb-4">
          <Card body className="">
            <Button
              variant="light"
              onClick={() => setExample("styles")}
              className="me-2"
            >
              Styles
            </Button>
            <Button
              variant="light"
              onClick={() => setExample("loader")}
              className="me-2"
            >
              Loader
            </Button>
            <Button
              variant="light"
              onClick={() => setExample("sort")}
              className="me-2"
            >
              Sort
            </Button>
          </Card>
        </div>

        {example === "styles" && <Styles />}
        {example === "loader" && <Loader />}
        {example === "sort" && <Sort />}
      </Card>
    </>
  );
};

export default App;
