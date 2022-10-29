import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";
import { useSelector } from "react-redux";

const Update = ({ setType, selectRef }) => {
  const clientOptions = useSelector((state) => state.clients.clients);

  const [clientId, setClientId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendUpdatedClient = () => {
    setType(0);
    selectRef.current.setValue("");
    console.log(clientId);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="client">
              <Form.Label>Select client to be updated</Form.Label>
              <Typeahead
                id="client"
                options={clientOptions}
                placeholder="Type name here..."
                onChange={(e) => {
                  if (e.length > 0) setClientId(e[0].id);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Client's new name</Form.Label>
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
              <Form.Label>Client's new last name</Form.Label>
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
          onClick={sendUpdatedClient}
          className="mt-3 mr-3"
        >
          Update
        </Button>
      </Container>
    </>
  );
};

export default Update;