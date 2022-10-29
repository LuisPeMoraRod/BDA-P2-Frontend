import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";
import { useSelector } from "react-redux";

const Delete = ({ setType, selectRef }) => {
  const productsOptions = useSelector((state) => state.products.products);
  const [productId, setProductId] = useState("");

  const deleteProduct = () => {
    setType(0);
    selectRef.current.setValue("");
    console.log(productId);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="product">
              <Form.Label>Select product to be deleted</Form.Label>
              <Typeahead
                id="product"
                options={productsOptions}
                placeholder="Type product here..."
                onChange={(e) => {
                  if (e.length > 0) setProductId(e[0].id);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container className="bottom-container">
        <Button
          variant="outline-primary"
          onClick={deleteProduct}
          className="mt-3 mr-3"
        >
          Delete
        </Button>
      </Container>
    </>
  );
};

export default Delete;
