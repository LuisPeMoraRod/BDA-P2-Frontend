import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Create = ({ setType, selectRef }) => {
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("");
  const [price, setPrice] = useState(0);

  const sendNewProduct = () => {
    setType(0);
    selectRef.current.setValue("");
    console.log("sending...");
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>New product's name</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Type the name here..."
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>New product's brand</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Type the brand here..."
                onChange={(e) => setBrandId(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>New products's price</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Type the price here..."
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container className="bottom-container">
        <Button
          variant="outline-primary"
          onClick={sendNewProduct}
          className="mt-3 mr-3"
        >
          Send
        </Button>
      </Container>
    </>
  );
};

export default Create;
