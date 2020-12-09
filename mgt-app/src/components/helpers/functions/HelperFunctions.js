import React from "react";

const AuthHeader = (props) => {
  return (
    <div className="header">
          <h1>{props.headerTitle}</h1>
          <p>{props.headerMsg}</p>
        </div>
  );
};

export default AuthHeader;
