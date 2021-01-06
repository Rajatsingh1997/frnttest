import React,{useState,useEffect} from "react";
import { Navbar, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function Invoice(props) {
  const[invoceList,setInvoiceList]=useState([])
  useEffect(() => {
   const invoice=JSON.parse(localStorage.getItem("list"))||[]
   setInvoiceList(invoice)
  }, [])
console.log(invoceList,"zzzzzz")
const handleDelete=async(i)=>{
  const updatedList=[...invoceList]
  const list=updatedList.filter((val,key)=>key!==i)
   await setInvoiceList(list)
  await localStorage.setItem("list",JSON.stringify(list))
}
const handleEdit=(i,val)=>{
props.history.push({pathname:"/frm",state:{index:i,value:val}})
}
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg" className="box0">
          <Navbar.Brand className="box">Invoice Managment System </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Link to="/"> 
          <Button variant="success">Log out</Button> </Link>
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
          <tbody>
            {invoceList.map((val,i)=>{
              return(
                <tr>
              <td>{val.name}</td>
              <td>{val.description}</td>
              <td>{val.units}</td>
              <td>{val.quantity}</td>
              <td>{val.price}</td>
              <td>{val.discount}</td>
              <td>{val.tax}</td>
              <td> <Button variant="primary" onClick={()=>handleEdit(i,val)}>Edit</Button>{' '}
              <Button variant="danger" onClick={()=>handleDelete(i)}>Delete</Button></td>
            </tr>
              )
            })}
          </tbody>
        </Table>
        <Link to="/Frm">
          <Button variant="primary">Add invoice</Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Invoice;
