import React from "react";
import { Navbar, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function Invoice() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg" className="box0">
          <Navbar.Brand className="box">Invoice Managment System </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          {/* <Link to="/Signup"> */}
          <Button variant="success">Log out</Button> {/* </Link> */}
        </Navbar>
      </div>

      <div className="container mt-5">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item name</th>
              <th>Item Discription</th>
              <th>Number of Units</th>
              <th>Quantity</th>
              <th>Unit price</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
        <Link to="/Frm">
          <Button variant="primary">Add invoice</Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Invoice;
