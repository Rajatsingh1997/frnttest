import React,{useState,useEffect} from "react";
import { Form, Button, Table,FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
function Invoice(props) {
  const[invoceList,setInvoiceList]=useState([]);
  const[search,setSearch]=useState("")

  useEffect(() => {
   const invoice=JSON.parse(localStorage.getItem("list"))||[]
   setInvoiceList(invoice)
  }, [])
  useEffect(()=>{
    const invoice=JSON.parse(localStorage.getItem("list"))||[]
    setInvoiceList(invoice?.filter(value => value?.name?.toLowerCase().indexOf(search.toLowerCase()) !== -1))
  },[search])

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
      <div className="container mt-5">
      <Form inline>
              <FormControl
                type="text"
                placeholder="Search by Item name"
                className="mr-sm-2"
                onChange={(e)=>setSearch(e.target.value)}
              />
            
          </Form>
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
              <td> <Button variant="primary"  onClick={()=>handleEdit(i,val)}>Edit</Button>{' '}
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
