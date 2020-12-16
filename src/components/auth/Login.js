import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {AuthHeader} from '../helpers/components/dynamicComponents'
import AuthLayout from '../layouts/AuthLayout';

const Login = () => {
    return (
        <div>
        <AuthLayout>
        <AuthHeader 
        headerTitle="Welcome"
        headerMsg="Kindly Sign in to access your account"/>
            <Form className="text-left sr-form">
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
            <Form.Text className="text-muted text-right">
              <Link to="/forgotpassword">Forgot your password?</Link>
            </Form.Text>
          </Form.Group>

          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Sign in
          </Button>
          <div className="mt-4">
          <p>
            Don’t have an account? <Link to="/signup">Create account here</Link>
          </p>
        </div>
        </Form>
        </AuthLayout>  
        </div>
    )
}

export default Login