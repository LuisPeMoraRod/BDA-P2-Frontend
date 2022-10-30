import React, { useState, createRef } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Typeahead } from "react-bootstrap-typeahead";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CounterInput from "react-bootstrap-counter";
import TableRow from "../../components/TableRow/TableRow";
import "./Purchases.scss";
import { postPurchase } from "../../services/api.purchases";

const Purchases = () => {
  const clientOptions = useSelector((state) => state.clients.clients);
  const productsOptions = useSelector((state) => state.products.products);

  const [clientId, setClientId] = useState("");
  const [purchases, setPurchases] = useState([]);
  const [newPurchase, setNewPurchase] = useState({});

  const clientRef = createRef();
  const productRef = createRef();

  const parsePurchases = (purchases) => {
    return purchases.map((purchase) => {
      return { idProducto: purchase.productId, cantidad: purchase.amount };
    });
  };

  const sendPurchases = async () => {
    const parsedPurchases = parsePurchases(purchases);
    try {
      let response;
      response = await postPurchase(clientId, parsedPurchases); // get Teams from API
      if (!response.ok) throw new Error("Couldn't create new purchase");
    } catch (error) {
      console.log(error);
    }
    clientRef.current.clear();
    setClientId("");
    setPurchases([]);
  };

  return (
    <div className="centered">
      <h3 className="mb-3 fw-light">Purchases</h3>
      <Form>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-5" controlId="client">
                <Form.Label>
                  Select the client to whom the purchases will be registered
                </Form.Label>
                <Typeahead
                  id="client"
                  options={clientOptions}
                  placeholder="Type name here..."
                  ref={clientRef}
                  onChange={(e) => {
                    if (e.length > 0) {
                      setClientId(e[0].id);
                    }
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="product">
                <Form.Label>Select a product</Form.Label>
                <Typeahead
                  id="product"
                  options={productsOptions}
                  ref={productRef}
                  placeholder="Type product here..."
                  onChange={(e) => {
                    if (e.length > 0) {
                      setNewPurchase({
                        productId: e[0].id,
                        product: e[0].nombre,
                        brand: e[0].marca,
                        price: e[0].precio,
                        amount: 1,
                      });
                    }
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="amount">
                <Form.Label>Select an amount</Form.Label>
                <CounterInput
                  value={1}
                  min={1}
                  max={50}
                  onChange={(value) => {
                    setNewPurchase((purchase) => ({
                      ...purchase,
                      amount: value,
                    }));
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button
                as={Col}
                md="auto"
                variant="outline-primary"
                className="mt-4 mx-1"
                title="Add purchase"
                onClick={() => {
                  setPurchases((purchases) => [...purchases, newPurchase]);
                  productRef.current.clear();
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      <Container>
        <Table bordered hover responsive>
          <thead className="table-header">
            <tr className="rowClass">
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="table-height">
            {purchases.map((purchase, i) => {
              return <TableRow key={i} row={purchase} />;
            })}
          </tbody>
        </Table>
      </Container>
      <Container className="bottom-container">
        <Button
          variant="outline-primary"
          onClick={sendPurchases}
          className="mt-3 mr-3"
        >
          Send
        </Button>
      </Container>
    </div>
  );
};

export default Purchases;
