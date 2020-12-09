import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import AuthHeader from '../helpers/functions/HelperFunctions'
import AuthLayout from '../layouts/AuthLayout';

const Register = () => {
    return (
        <div>
        <AuthLayout>
        <AuthHeader 
        headerTitle="Welcome"
        headerMsg="Kindly create an account to access SMS "/>
            <Form className="text-left sr-form">
             <Form.Group controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first and last name" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Create an account
          </Button>
          <div className="mt-4">
          <p>
          Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
        </Form>
        </AuthLayout>
        </div>
    )
}

export default Register