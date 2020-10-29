
import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#9e9e9e",
};

const defaultStyle = {
  textDecoration: "none",
  color: "white",
  margin: "5px",
};

const Navigation = () => {
  return (
    <div className="navi">
      <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
        Home
      </NavLink>
      <NavLink to="/info" activeStyle={activeStyle} style={defaultStyle}>
        Info
      </NavLink>
      <NavLink to="/nightMare" activeStyle={activeStyle} style={defaultStyle}>
        nightMare
      </NavLink>
      <NavLink to="/witchSaga" activeStyle={activeStyle} style={defaultStyle}>
      witchSaga
      </NavLink>
    </div>
  );
};

export default Navigation;