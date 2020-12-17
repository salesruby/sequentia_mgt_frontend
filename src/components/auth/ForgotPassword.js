import React from "react";
import { Form, Button } from "react-bootstrap";
import { AuthHeader } from "../helpers/components/dynamicComponents";
import AuthLayout from "../layouts/AuthLayout";

const ForgotPassword = () => {
  return (
    <div>
      <AuthLayout showBacklink={true} backlink="/signin">
        <AuthHeader
          headerTitle="Forgot Password"
          headerMsg="Kindly enter your e-mail. You will receive a link to reset your password."
        />
        <Form className="text-left sr-form">
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>

          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Send Link
          </Button>
        </Form>
      </AuthLayout>
    </div>
  );
};

export default ForgotPassword;
