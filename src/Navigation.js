
import React from "react";
import { NavLink } from "react-router-dom";
import gameMediaLogo from './imgs/gameMediaLogo.png';
import playLogo from './imgs/playLogo.png';

const activeStyle = {
  color: "black",
};

const defaultStyle = {
  textDecoration: "none",
  color: "#9e9e9e",
  margin: "5px",
};

const Navigation = () => {
  return (
    <div className="header">
      <div className="gameLogo">
        <img src={gameMediaLogo}/>
      </div>
      <div className="playLogo">
        <img src={playLogo} />
      </div>
      <h1> Untact With Me </h1>
      <div className="navi">
        <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
          Home
        </NavLink>
        <NavLink to="/info" activeStyle={activeStyle} style={defaultStyle}>
          Info
        </NavLink>
        {/* <NavLink to="/nightMare" activeStyle={activeStyle} style={defaultStyle}>
          nightMare
        </NavLink>
        <NavLink to="/witchSaga" activeStyle={activeStyle} style={defaultStyle}>
        witchSaga
        </NavLink> */}
        </div>
    </div>
  );
};

export default Navigation;