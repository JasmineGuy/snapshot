import React from "react";
import "./Nav.css";
import * as Icon from "react-feather";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="left">
        <h2>
          Snapsh
          <Icon.Aperture />t
        </h2>
      </div>
    </div>
  );
};

export default Nav;
