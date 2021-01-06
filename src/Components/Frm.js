import React from "react";
import {Form,Col,Button,Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
function List() {

  return (
    <div>
    <div>
        <Navbar bg="light" expand="lg" className="box0">
          <Navbar.Brand className="box">Invoice Managment System </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Link to="/">
            <Button variant="success">Log out</Button>{" "}
          </Link>
        </Navbar>
      </div>
      <Form className="container mt-5">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Item name </Form.Label>
            <Form.Control type="text" placeholder="Item name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Item Discription</Form.Label>
            <Form.Control type="text" placeholder="Item Discription" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Number of Units</Form.Label>
          <Form.Control type="number" placeholder="Number of Units" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Quantity" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Unit price</Form.Label>
            <Form.Control type="number" placeholder="unit price"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Discount</Form.Label>
            <Form.Control type="number" placeholder="discount">
             
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Tax</Form.Label>
            <Form.Control type="number" placeholder="tax"/>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default List;
