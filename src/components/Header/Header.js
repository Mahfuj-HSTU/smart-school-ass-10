import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.jpg';
import { FaToggleOn, FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
    const [ theme, setTheme ] = useState( "light" )

    const { user, logOut } = useContext( AuthContext )

    const toggleTheme = () => {
        if ( theme === 'dark' ) {
            setTheme( 'light' )
            toast.success( 'This is light theme' )
        }
        else {
            setTheme( 'dark' )
            toast.success( 'This is dark theme' )
        }
    }

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
                        <Link to='/'>
                            { user?.uid ?
                                <>
                                    {/* <span className='me-2'>{ user.displayName }</span> */ }
                                    {
                                        user?.photoURL ?
                                            <Image title={ user.displayName } style={ { height: '40px' } } roundedCircle src={ user?.photoURL }></Image> :
                                            <FaUser></FaUser>
                                    }
                                    <Button onClick={ handleLogOut } variant="light">Logout</Button>
                                </>
                                :
                                <div>
                                    <Link className='text-decoration-none me-3 text-dark' to='/login'>Login</Link>
                                    <Link className='text-decoration-none me-2 text-dark' to='/register'>Register</Link>
                                </div>
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
