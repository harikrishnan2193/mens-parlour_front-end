import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from '../Images/logo.png'


function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Navbar.Brand className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={logo} alt="no image" />
                    </Navbar.Brand>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <Nav className="mx-auto justify-content-center">
                            <Nav.Link className='me-5'>Home</Nav.Link>
                            <Nav.Link className='me-5'>Services</Nav.Link>
                            <Nav.Link >Contact</Nav.Link>
                        </Nav>
                        <button className="logout-button me-4">Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header