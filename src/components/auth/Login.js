import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Spinner } from "react-bootstrap";

import { formFieldChangeHandler } from "../helpers/utility";
import { AuthHeader } from "../helpers/components/dynamicComponents";
import AuthLayout from "../layouts/AuthLayout";
import { authLogin } from "../../store/actions/authActions";

const Login = (props) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userLogin);
  const passwordChange = useSelector((state) => state.passwordChange);

  const { justChangedPassword } = passwordChange;
  const { loading, userInfo, error, userToken } = userData;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authLogin(values.email, values.password));
    // props.history.push("/");
  };

  useEffect(() => {
    if (userInfo && userToken) {
      props.history.push("/appointments");
    }
    return () => {
      //
    };
  }, [props.history, userToken, userInfo]);
  return (
    <div>
      <AuthLayout>
        <AuthHeader
          headerTitle="Welcome"
          headerMsg={
            justChangedPassword
              ? "Sign in with your new password"
              : "Kindly Sign in to access your account"
          }
        />
        <Form onSubmit={submitHandler} className="text-left sr-form">
          {error && (
            <div style={{ color: "red" }} className="text-center">
              {error.message && error.message}
            </div>
          )}
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => formFieldChangeHandler(e, values, setValues)}
              placeholder="Enter your email address"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => formFieldChangeHandler(e, values, setValues)}
              placeholder="Enter your password"
            />
            <Form.Text className="text-muted text-right">
              <Link to="/forgotpassword">Forgot your password?</Link>
            </Form.Text>
          </Form.Group>

          {loading && (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          )}
          {!loading && (
            <Button style={{ width: "100%" }} variant="primary" type="submit">
              Sign in
            </Button>
          )}
          <div className="mt-4">
            <p>
              Don’t have an account?{" "}
              <Link to="/signup">Create account here</Link>
            </p>
          </div>
        </Form>
      </AuthLayout>
    </div>
  );
};

export default Login;
