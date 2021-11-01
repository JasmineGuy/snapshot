import React from "react";
import "./Nav.css";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="left">
        <h2>
          Snapsh
          <Icon.Aperture />t
        </h2>
      </div>
      <div className="right">
        <NavLink className="nav" to="/photos" activeClassName="nav-active">
          <h3>Photos</h3>
        </NavLink>
        <NavLink className="nav" to="videos" activeClassName="nav">
          <h3>Videos</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
