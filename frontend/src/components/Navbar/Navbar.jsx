import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLoginPopUp }) => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>
      <Link to={"/"}>
        <img src={assets.logo} alt='' className='logo' />
      </Link>

      <ul className='navbar-menu'>
        <Link
          to={"/"}
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <li
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobiel-app
        </li>
        <li
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt='' />
        <div>
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt='' />
          </Link>
          <div className='dot'></div>
        </div>
        <button onClick={() => setShowLoginPopUp(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
