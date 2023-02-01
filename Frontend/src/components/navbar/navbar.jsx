import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    return navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <img
        className="logo"
        src="./images/Screenshot_2022-10-15_131804-removebg-preview.png"
      />
      <nav ref={navRef}>
        <a onClick={showNavbar} href="#Home">
          Home
        </a>
        <a onClick={showNavbar} href="#Menu">
          Menu
        </a>
        <a onClick={showNavbar} href="#Contact">
          Contact
        </a>
        <Link to='/blog'>Blog</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-open-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
