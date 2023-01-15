import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
    const navigate = useNavigate()
    
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.clear()
        navigate("/")
    }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">React-Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/profile">Profile</Link>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation