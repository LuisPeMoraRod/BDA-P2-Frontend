import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";
import { useSelector } from "react-redux";

const Update = ({ setType, selectRef }) => {
  const productsOptions = useSelector((state) => state.products.products);
  const brandsOptions = useSelector((state) => state.brands.brands);

  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);

  const sendUpdatedProduct = () => {
    setType(0);
    selectRef.current.setValue("");
    console.log(productId);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="client">
              <Form.Label>Select product to be updated</Form.Label>
              <Typeahead
                id="client"
                options={productsOptions}
                placeholder="Type product here..."
                onChange={(e) => {
                  if (e.length > 0) {
                    setProductId(e[0].id);
                    setName(e[0].nombre);
                    setBrand(e[0].marca);
                    setPrice(e[0].precio);
                  }
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
              <Form.Label>Products's new name</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Type the name here..."
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="brandId">
              <Form.Label>Product's new brand</Form.Label>
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
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Product's new price</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Type the price here..."
                onChange={(e) => setPrice(e.target.value)}
                defaultValue={price}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container className="bottom-container">
        <Button
          variant="outline-primary"
          onClick={sendUpdatedProduct}
          className="mt-3 mr-3"
        >
          Update
        </Button>
      </Container>
    </>
  );
};

export default Update;
