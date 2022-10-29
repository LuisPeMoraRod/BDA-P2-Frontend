import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { createClient } from "../../store/slices/clients/actions";
import { useDispatch } from "react-redux";

const Create = ({ setType, selectRef }) => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.clients.total);
  const id = total + 1;

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendNewClient = () => {
    dispatch(createClient({ id: id, first_name: name, last_name: lastName })); //post new client
    setType(0);
    selectRef.current.setValue("");
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
