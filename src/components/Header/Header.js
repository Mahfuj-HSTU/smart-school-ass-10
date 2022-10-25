import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.jpg';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"> <img src={ logo } alt="" width='40px' /> <span className='fs-4 fw-semibold'>Smart School</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-5 fw-semibold">
                        <Nav.Link href="#features"><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link href="#courses"><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link href="#faq"><Link to='/faq'>FAQ</Link ></Nav.Link>
                        <Nav.Link href="#pricing"><Link to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={ 2 } href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
