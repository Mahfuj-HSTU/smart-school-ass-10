import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.jpg';
import { FaToggleOn, FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';


const Header = ( { toggleTheme } ) => {


    //     useEffect( () => {
    //         document.body.className = theme;
    //     }, [ theme ] )
    //


    const handleLogOut = () => {
        logOut()
            .then( () => { } )
            .catch( error => console.error( 'error ', error ) )
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"> <img src={ logo } alt="" width='40px' /> <span className='fs-3 fw-semibold me-3 text-primary'>Smart School</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-5 fw-semibold ">
                        <Link className='text-decoration-none me-5 text-dark' to='/'>Home</Link>
                        <Link className='text-decoration-none me-5 text-dark' to='/courses' > Courses</Link >
                        <Link className='text-decoration-none me-5 text-dark' to='/faq'>FAQ</Link >
                        <Link className='text-decoration-none me-5 text-dark' to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Link to='/profile'>
                            { user?.uid ?
                                <>
                                    <span className='me-2'>{ user.displayName }</span>
                                    {
                                        user?.photoURL ?
                                            <Image style={ { height: '30px' } } roundedCircle src={ user?.photoURL }></Image> :
                                            <FaUser></FaUser>
                                    }
                                    <Button onClick={ handleLogOut } variant="light">Logout</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <button onClick={ toggleTheme } type="button" class="btn btn-light"><FaToggleOn /></button>
            </Container>

        </Navbar>
    );
};

export default Header;
