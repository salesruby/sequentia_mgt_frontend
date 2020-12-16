import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { AppNav } from "../helpers/components/dynamicComponents";

const AdminLayout = (props) => {
  const NavLinks = [
    {
      href: "/appointments",
      Text: "Appointmnet Management",
    },
    {
      href: "/request-demo",
      Text: "Request Demo",
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
  return (
    <Container fluid>
      <AppNav Logo={<h2>SMS</h2>} NavLinks={NavLinks} user={user} />
      {props.children}
    </Container>
  );
};

export default AdminLayout;
