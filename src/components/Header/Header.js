import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import  header from '../../images/Bg.png'
import './Header.css'


const Header = () => {
    const [loggedInUser,setLoggedInUser]=useState({})
    return (
        <div className="head" >

  
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Road Rider</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">HomePage</Nav.Link>
                             <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link href="#features">Blog</Nav.Link>
                            <Nav.Link href="#pricing">contact</Nav.Link>                       
                            <Nav.Link className='btn btn-danger' as={Link} to="/login">Login</Nav.Link>
                            <h1 >{loggedInUser.name}</h1>
                        </Nav>
                       
                    </NavbarCollapse>
                </Container>
            </Navbar>
            {/* <img className="media-image w-100 h-25" src={process.env.PUBLIC_URL + "/bg.jpg"} alt="" /> */}
        </div>
    );
};

export default Header;