import React from "react";
import {Link} from "react-router-dom"
import { Container } from "react-bootstrap";

export default function AuthLayout(props) {
  return (
    <Container className="main" fluid>
    { props.showBacklink ?
     <div className="go-back"><Link to={props.backlink}> Go Back </Link></div> 
     : ''
     }
      
      <div className="black-box" />
      <div className="form-box">
        
        {props.children}
      </div>
      
    </Container>
  );
}
