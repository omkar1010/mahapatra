import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-4 ml-3">Register</NavLink>
          <Nav className="me-auto">
            <NavLink to="/Home" className="text-decoration-none text-light ">Admin</NavLink>
          </Nav>
          <NavLink to="/powerbi" className="text-decoration-none text-light ">Report</NavLink>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers