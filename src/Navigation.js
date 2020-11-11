
import React from "react";
import { NavLink } from "react-router-dom";
import gameMediaLogo from './imgs/gameMediaLogo.png';
// import playLogo from './imgs/playLogo.png';



const Navigation = () => {
  return (
    <div className="header fade-in">
      <div className="gameLogo">
        <img src={gameMediaLogo}/>
      </div>
      {/* <div className="playLogo">
        <img src={playLogo} />
      </div> */}
      {/* <h1> Untact With Me </h1> */}
      <div className="navi">
        <NavLink to="/"  exact >
          HOME
        </NavLink>
        <NavLink to="/info" >
          INFO
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