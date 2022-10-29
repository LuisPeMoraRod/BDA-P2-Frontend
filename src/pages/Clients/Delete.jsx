import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";
import { useSelector } from "react-redux";
import { removeClient } from "../../store/slices/clients/actions";
import { useDispatch } from "react-redux";

const Delete = ({ setType, selectRef }) => {
  const dispatch = useDispatch();
  const clientOptions = useSelector((state) => state.clients.clients);
  const [clientId, setClientId] = useState("");

  const deleteClient = () => {
    dispatch(removeClient(clientId));
    setType(0);
    selectRef.current.setValue("");
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="client">
              <Form.Label>Select client to be deleted</Form.Label>
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
      <Container className="bottom-container">
        <Button
          variant="outline-primary"
          onClick={deleteClient}
          className="mt-3 mr-3"
        >
          Delete
        </Button>
      </Container>
    </>
  );
};

export default Delete;
