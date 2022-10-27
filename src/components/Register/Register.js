import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import './Register.css'

const Register = () => {
    const [ error, setError ] = useState( '' )
    const [ accepted, setAccepted ] = useState( false )
    const { createUser, updateUserProfile, verifyEmail, providerLogin } = useContext( AuthContext )

    const googleProvider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value
        const email = form.email.value;
        const password = form.password.value;

        createUser( email, password )
            .then( result => {
                const user = result.user;
                console.log( user );
                form.reset();
                setError( '' )
                handleUpdateProfile( name, photoUrl )
                handleEmailVerification();
                toast.success( 'Please verify your email' )
            } )
            .catch( error => {
                console.error( error )
                setError( error.message );
            } )
    }

    const handleGoogleSignIn = () => {
        providerLogin( googleProvider )
            .then( result => {
                const user = result.user;
                console.log( user );
            } )
            .catch( error => console.error( 'error ', error ) )
    }

    const handleGithubSignIn = () => {
        providerLogin( githubprovider )
            .then( result => {
                const user = result.user;
                console.log( user );
            } )
            .catch( error => console.error( 'error ', error ) )
    }

    const handleUpdateProfile = ( name, photoURL ) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile( profile )
            .then( () => { } )
            .catch( error => console.error( error ) )
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then( () => { } )
            .catch( error => {
                console.error( error )
            } )
    }

    const handleAccepted = event => {
        setAccepted( event.target.checked )
    }

    return (
        <Form onSubmit={ handleSubmit } className="custom mx-auto my-5 bg-light pt-4 pb-5 px-2 rounded-4 ">
            <Form.Group className="mb-3 text-start" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photoUrl" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPhoto">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                    onClick={ handleAccepted }
                    label={ <>Accept <Link to='/terms'>Terms and Condition</Link> </> } />
            </Form.Group>

            <Form.Text className="text-danger text-start fs-6">
                We'll never share your email and password with anyone else.
            </Form.Text>  <br />
            <Button className='my-2 mx-auto' variant="primary" type="submit" disabled={ !accepted }>
                Register
            </Button> <br />

            <Form.Text className="text-danger ">
                { error }
            </Form.Text>
            <br /> <br />

            <ButtonGroup>
                <Button onClick={ handleGoogleSignIn } className='mb-4 me-4' variant="outline-info"><FaGoogle></FaGoogle> Google</Button>
                <Button onClick={ handleGithubSignIn } className='mb-4' variant="outline-dark"><FaGithub></FaGithub> Github</Button>
            </ButtonGroup>
        </Form>
    );
};

export default Register;
