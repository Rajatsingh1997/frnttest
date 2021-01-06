import React, { useState, useEffect } from "react";
import { Form, Col, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function Frm(props) {
  const [index, setIndex] = useState(null)
  const [invoiceData, setInvoiceData] = useState({
    name: "",
    description: "",
    units: 0,
    quantity: 0,
    price: 0,
    discount: 0,
    tax: 0
  })
  useEffect(() => {
    // localStorage.removeItem("list")
    if (props?.history?.location?.state?.value) {
      setInvoiceData({ ...invoiceData, ...props?.history?.location?.state?.value })
      setIndex(props?.history?.location?.state?.index)
    }
    else {
      setInvoiceData({
        ...invoiceData, name: "",
        description: "",
        units: 0,
        quantity: 0,
        price: 0,
        discount: 0,
        tax: 0
      })
      setIndex(null)
    }
    console.log(props.history, "iiii")
  }, [])

  const handleInputChange = (e, data) => {
    setInvoiceData({ ...invoiceData, [data]: e.target.value })

  }
  const submitInvoice = async (e) => {
    console.log("zzzz")
    if (index || index === 0) {
      let oldList = await JSON.parse(localStorage.getItem("list")) || []
      oldList[index] = invoiceData
      console.log(oldList, index, "ppppoo")
      await localStorage.setItem("list", JSON.stringify(oldList))
      await setInvoiceData({
        ...invoiceData, name: "",
        description: "",
        units: 0,
        quantity: 0,
        price: 0,
        discount: 0,
        tax: 0
      })
      props.history.push("/listone")
    }
    else {
      const oldList = await JSON.parse(localStorage.getItem("list")) || []
      const newList = oldList.length > 0 ? [...oldList] : []
      newList.push(invoiceData)
      await localStorage.setItem("list", JSON.stringify(newList))
      await setInvoiceData({
        ...invoiceData, name: "",
        description: "",
        units: 0,
        quantity: 0,
        price: 0,
        discount: 0,
        tax: 0
      })
      props.history.push("/listone")
    }

  }
  console.log(index, "ppppoo")
  console.log(invoiceData, "ppppp")
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" className="box0">
          <Navbar.Brand className="box">Invoice Managment System </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Link to="/listone">
            <Button variant="success">go to list</Button>{" "}-
          </Link>
          <Link to="/">
            <Button variant="success">Log out</Button>{" "}
          </Link>
        </Navbar>
      </div>
      <Form className="container mt-5">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Item name </Form.Label>
            <Form.Control type="text" value={invoiceData.name} placeholder="Item name" onChange={(e) => handleInputChange(e, "name")} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Item Discription</Form.Label>
            <Form.Control type="text" value={invoiceData.description} placeholder="Item Discription" onChange={(e) => handleInputChange(e, "description")} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Number of Units</Form.Label>
          <Form.Control type="number" value={invoiceData.units} placeholder="Number of Units" onChange={(e) => handleInputChange(e, "units")} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" value={invoiceData.quantity} placeholder="Quantity" onChange={(e) => handleInputChange(e, "quantity")} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Unit price</Form.Label>
            <Form.Control type="number" value={invoiceData.price} placeholder="unit price" onChange={(e) => handleInputChange(e, "price")} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Discount</Form.Label>
            <Form.Control type="number" value={invoiceData.discount} placeholder="discount" onChange={(e) => handleInputChange(e, "discount")}>

            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Tax</Form.Label>
            <Form.Control type="number" value={invoiceData.tax} placeholder="tax" onChange={(e) => handleInputChange(e, "tax")} />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" 
        type="button" 
        onClick={submitInvoice}
        disabled={invoiceData.name && invoiceData.description && invoiceData.units && invoiceData.quantity && invoiceData.price && invoiceData.discount && invoiceData.tax? false : true}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Frm;
