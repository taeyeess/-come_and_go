import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>DEULOCK - NALOCK</h1>
      </Link>
    </>
  );
};

export default Header;
