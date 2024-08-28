import React from "react";
import "./Navbar.css";
import { IoPersonCircle } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <p>tera</p>
      </div>
      <div className="navbar-items">
        <ul>
          <li>Sofas</li>
          <li>Lounge Chairs</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="navbar-searchbox">
        <input type="text" placeholder="Search"></input>
        <GoSearch></GoSearch>
      </div>

      <div className="navbar-login">
        <IoPersonCircle></IoPersonCircle>
        <p>Log in</p>
      </div>

      <div className="navbar-favorite">
        <GrFavorite></GrFavorite>
      </div>
      <div className="navbar-shopBag">
        <HiOutlineShoppingBag></HiOutlineShoppingBag>
      </div>

      <div className="navbar-shopingButton">
        <button>Shop</button>
      </div>
    </div>
  );
};

export default Navbar;
