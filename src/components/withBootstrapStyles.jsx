import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const withBootstrapStyles = (WrappedComponent) => {
  return (props) => {
    return (
      <Card className="block">
        <Container className="m-4">
          <Row>
            <Col>
              <WrappedComponent {...props} />
            </Col>
          </Row>
        </Container>
      </Card>
    );
  };
};

export default withBootstrapStyles;
