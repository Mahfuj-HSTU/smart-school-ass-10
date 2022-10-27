import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [ error, setError ] = useState( '' )
    const [ accepted, setAccepted ] = useState( false )

    const { createUser, updateUserProfile, verifyEmail } = useContext( AuthContext )

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value
        const email = form.email.value;
        const password = form.password.value;
        // console.log( name, photoUrl, email, password )

        createUser( email, password )
            .then( result => {
                const user = result.user;
                console.log( user );
                form.reset();
                setError( '' )
                handleUpdateUserProfile( name, photoUrl )
                handleEmailVerification();
                toast.success( 'Please verify your email' )
            } )
            .catch( error => {
                console.error( error )
                setError( error.message );
            } )
    }

    const handleUpdateUserProfile = ( name, photoURL ) => {
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
            .catch( e => {
                console.error( e )
            } )
    }

    const handleAccepted = event => {
        setAccepted( event.target.checked )
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photoUrl" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                    onClick={ handleAccepted }
                    label={ <>Accept <Link to='/terms'>Terms and Condition</Link> </> } />
            </Form.Group>

            <Form.Text className="text-danger ">
                We'll never share your email and password with anyone else.
            </Form.Text>  <br />
            <Button className='my-3' variant="primary" type="submit" disabled={ !accepted }>
                Register
            </Button>


            <Form.Text className="text-danger ">
                { error }
            </Form.Text>
        </Form>
    );
};

export default Register;
