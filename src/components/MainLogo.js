import React from "react";
import logoWhite from "../assets/images/mainLogoAsak.png";
import logoBlack from "../assets/images/mainLogoAsak.png";

const MainLogo = ({ collapse, showMenu }) => {
  return (
    <div className="navbar-header">
      <div className="logo">
        <a href={'/'}>
          <img className="logo logo-display" src={logoWhite} alt="" />
          <img className="logo logo-scrolled" src={logoBlack} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainLogo;
