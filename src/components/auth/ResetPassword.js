import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Spinner } from "react-bootstrap";

import { formFieldChangeHandler } from "../helpers/utility";
import { authChangePassword } from "../../store/actions/authActions";
import { AuthHeader } from "../helpers/components/dynamicComponents";
import AuthLayout from "../layouts/AuthLayout";

const ResetPassword = (props) => {
  const [values, setValues] = useState({
    old_password: "",
    new_password: "",
    password_confirmation: "",
  });

  const dispatch = useDispatch();
  const passwordChange = useSelector((state) => state.passwordChange);
  const userToken = useSelector((state) => state.userLogin.userToken);
  const { loading, error } = passwordChange;

  const successCallback = () => {
    return props.history.push("/signin");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      authChangePassword(
        values.old_password,
        values.new_password,
        values.password_confirmation,
        userToken,
        successCallback
      )
    );
  };

  useEffect(() => {
    return () => {
      //
    };
  }, []);
  return (
    <div>
      <AuthLayout>
        <AuthHeader
          headerTitle="Reset Password"
          headerMsg="Create a new password"
        />
        <Form onSubmit={submitHandler} className="text-left sr-form">
          {error && (
            <div style={{ color: "red" }} className="text-center">
              {error.message && error.message}
            </div>
          )}
          <Form.Group controlId="oldPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              name="old_password"
              value={values.old_password}
              onChange={(e) => formFieldChangeHandler(e, values, setValues)}
              placeholder="Enter your old password"
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="new_password"
              value={values.new_password}
              onChange={(e) => formFieldChangeHandler(e, values, setValues)}
              placeholder="Enter your new password"
            />
          </Form.Group>
          <Form.Group controlId="confirmNewPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="password_confirmation"
              value={values.password_confirmation}
              onChange={(e) => formFieldChangeHandler(e, values, setValues)}
              placeholder="Confirm your new password"
            />
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
              Reset Password
            </Button>
          )}
        </Form>
      </AuthLayout>
    </div>
  );
};

export default ResetPassword;
