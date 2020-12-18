import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { AppNav } from "../helpers/components/dynamicComponents";



const AdminLayout = (props) => {
  
const apiStatus = useSelector((state) => state.apiStatus);
const { loading, error } = apiStatus;

  const NavLinks = [
    {
      href: "/appointments",
      Text: "Appointmnet Management",
    },
    {
      href: "/demo-requests",
      Text: "Demo Requests",
    },
    {
      href: "/bugs",
      Text: "Bug Reporting",
    },
    {
      href: "#",
      Text: "Email Monitoring",
    },
    {
      href: "#",
      Text: "Capacity tracking",
    },
  ];
  const user = {
    userAvatar: "/images/user-avatar.png",
    name: "hannah johnson inya",
  };
  return loading ? (
    <div>API Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <Container fluid>
      <AppNav Logo={<h2>SMS</h2>} NavLinks={NavLinks} user={user} />
      {props.children}
    </Container>
  );
};

export default AdminLayout;
