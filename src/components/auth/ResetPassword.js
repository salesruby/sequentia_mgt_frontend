import React from "react";
import { Form, Button } from "react-bootstrap";
import { AuthHeader } from "../helpers/components/dynamicComponents";
import AuthLayout from "../layouts/AuthLayout";

const ResetPassword = () => {
  return (
    <div>
      <AuthLayout>
        <AuthHeader
          headerTitle="Reset Password"
          headerMsg="Kindly create a new password for your account"
        />
        <Form className="text-left sr-form">
          <Form.Group controlId="email">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="email" placeholder="Enter a new password" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="email"
              placeholder="Confirm your new password"
            />
          </Form.Group>

          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Reset Password
          </Button>
        </Form>
      </AuthLayout>
    </div>
  );
};

export default ResetPassword;
