"use client";
import React from "react";
import "./NavBar.scss";
import axosLogo from "../../images/NavBar/grupo-axo-logo.png";

export type NavBarProps = {
  // types...
};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo-container">
        <img src={axosLogo} alt="grupo axo logo" className="navbar__logo" />
      </div>
    </div>
  );
};

export default NavBar;
