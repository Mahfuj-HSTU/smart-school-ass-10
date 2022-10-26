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
                <Navbar.Brand href="#home"> <img src={ logo } alt="" width='40px' /> <span className='fs-3 fw-semibold me-3 text-primary'>Smart School</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-5 fw-semibold ">
                        <Link className='text-decoration-none me-5 text-dark' to='/'>Home</Link>
                        <Link className='text-decoration-none me-5 text-dark' to='/course' > Courses</Link >
                        <Link className='text-decoration-none me-5 text-dark' to='/faq'>FAQ</Link >
                        <Link className='text-decoration-none me-5 text-dark' to='/blog'>Blog</Link>
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
