import React, { useState,useEffect } from "react";
import { Form, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";


export default function SignUpfrm(props) {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [arr,setArr]=useState([]);

 useEffect(() => {
  localStorage.removeItem("list");
 }, [])

  const handleSubmit =async () => {
    let SignUpdata=[...arr]
    let formData = {
      username: user.trim(),
      password: password.trim(),
      dob: dob.trim(),

      
    };
    SignUpdata.push(formData)
  
  //  var first=arr.push(formData); 
   await setArr(SignUpdata);
  await localStorage.setItem("credentials",JSON.stringify(SignUpdata));
    console.log(arr,"llll");
  await setUser("");
   await setPassword("");
   await setDob("")
  props.history.push("/")
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Invoice Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Link to="/">
          <Button variant="success">SignIn</Button>{" "}
        </Link>
      </Navbar>

      <div className="formdiv">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
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
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>User type</Form.Label>
            <Form.Control
              type="date"
              name={dob}
              onChange={(e) => setDob(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={user && password && dob? false : true}
            onClick={() => handleSubmit()}
          > Register
          </Button>
        </Form>
      </div>
    </>
  );
}