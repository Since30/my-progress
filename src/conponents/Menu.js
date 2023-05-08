import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../Asset/logo.jpg";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li className="logo"><NavLink to="/contact">{newFunction()}</NavLink> </li>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : null)}>Acceuil</NavLink></li>
        <li><NavLink to="/Gallery" className={({ isActive }) => (isActive ? "activeLink" : null)}>Gallerie</NavLink></li>
        <li><NavLink to="/Price" className={({ isActive }) => (isActive ? "activeLink" : null)}>Tarifs et Prestations</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "activeLink" : null)}>Contact</NavLink></li>
      </ul>
    </div>
  );

  function newFunction() {
    return <li><img src={Img} alt="logo" /></li>;
  }
}