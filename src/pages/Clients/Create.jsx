import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Create = ({ setType, selectRef }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendNewClient = () => {
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
              <Form.Label>New client's name</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Type the name here..."
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>New client's last name</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Type the last name here..."
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container className="bottom-container">
        <Button
          variant="outline-primary"
          onClick={sendNewClient}
          className="mt-3 mr-3"
        >
          Send
        </Button>
      </Container>
    </>
  );
};

export default Create;
