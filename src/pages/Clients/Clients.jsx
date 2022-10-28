import React, { useState, createRef } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";

const NONE = 0;
const CREATE = 1;
const UPDATE = 2;
const DELETE = 3;

const managementTypes = [
  { value: CREATE, label: "Create a new client" },
  { value: UPDATE, label: "Edit a client's info" },
  { value: DELETE, label: "Delete a client" },
];

const Clients = () => {
  //client management type
  const [type, setType] = useState(NONE);
  const selectRef = createRef();

  return (
    <div className="centered">
      <h3 className="mb-5 fw-light">Clients Management</h3>
      <Form>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="managementType">
                <Form.Label>What do you want to do?</Form.Label>
                <Select
                  id="managementType"
                  options={managementTypes}
                  placeholder="Select a type..."
                  onChange={(e) => setType(e.value)}
                  ref={selectRef}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        {type === CREATE && <Create setType={setType} selectRef={selectRef} />}
        {type === UPDATE && <Update setType={setType} selectRef={selectRef} />}
        {type === DELETE && <Delete setType={setType} selectRef={selectRef} />}
      </Form>
    </div>
  );
};

export default Clients;
