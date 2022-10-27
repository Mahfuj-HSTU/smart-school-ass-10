import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [ error, setError ] = useState( '' )
    const { signIn, setLoading } = useContext( AuthContext )
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log( email, password )

        signIn( email, password )
            .then( result => {
                const user = result.user;
                // console.log( user )
                form.reset();
                setError( '' );
                if ( user.emailVerified ) {
                    navigate( from, { replace: true } )
                }
                else {
                    toast.error( 'Your email is not verified, please verify your email first.' )
                }

            } )
            .catch( e => {
                console.error( e )
                setError( e.message );
            } )
            .finally( () => {
                setLoading( false )
            } )
    }

    return (
        <div>
            <Form onSubmit={ handleSubmit } className="custom mx-auto my-5 bg-success pt-4 pb-5 px-2 bg-opacity-50 rounded-4">
                <Form.Text className="fw-semibold text-dark">
                    <h2>Login</h2>
                </Form.Text>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Text className="text-danger text-start fs-6 fw-semibold">
                    <p>Don't share your email and password</p>
                </Form.Text>

                <Button className='mt-4' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-danger">
                    { error }
                </Form.Text>
                <Form.Group className="my-4 text start" controlId="formBasicCheckbox">
                    <>New to Smart School <Link to='/register'>Create a account</Link></>
                </Form.Group>

            </Form>
        </div>
    );
};

export default Login;
