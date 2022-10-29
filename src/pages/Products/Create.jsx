import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import { createProduct } from "../../store/slices/products/actions";
import { useDispatch } from "react-redux";

const Create = ({ setType, selectRef }) => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.products.total);
  const id = total + 1;
  const brandsOptions = useSelector((state) => state.brands.brands);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);

  const sendNewProduct = () => {
    dispatch(
      createProduct({ id: id, nombre: name, marca: brand, precio: price })
    ); //post new client
    setType(0);
    selectRef.current.setValue("");
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
              <Typeahead
                id="brand"
                options={brandsOptions}
                placeholder="Type brand here..."
                onChange={(e) => {
                  if (e.length > 0) setBrand(e[0].nombre);
                }}
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
