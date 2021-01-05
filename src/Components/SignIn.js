import React, { useState } from "react";
import { Form, Button, Navbar, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./SignIn.css";


export default function SignIn() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const[isValid,setIsValid]=useState(false)


  const handleSubmit = () => {   
    const allUserData=JSON.parse(localStorage.getItem('credentials'))||[]
    console.log(allUserData,'EEEEEEEEEEEEE')
    allUserData.map(val=>{
      if(user===val.username && password===val.password)
      setIsValid(true)
    })
    setUser("");
    setPassword("");
  };
 
console.log(isValid,'WWWWWWWWWWWWWWWW')
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" className="box0">
          <Navbar.Brand className="box">Invoice Managment System </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Link to="/Signup">
            <Button variant="success">SignUp</Button>{" "}
          </Link>
        </Navbar>
      </div>
      <div className="formdiv">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="user name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={user && password ? false : true}
              onClick={handleSubmit}
            >
        
                <span>Login</span>
            </Button>
        </Form>   
      </div>
    </>
  );
}