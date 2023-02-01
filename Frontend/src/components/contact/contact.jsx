import React from "react";
import {Wrapper, Status} from "@googlemaps/react-wrapper"

function contact() {
  return (
    <footer>
      <div className="contact" id="Contact">
        <div className="icons">
          <a className="icon" href="https://www.facebook.com/nikhil.sinha.98871">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="icon" href="https://www.instagram.com/__nikhil___sinha__/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a className="icon" href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="icon" href="https://github.com/nikhilsinha822">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="icon" href="mailto:nikhilsinha822@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <p className="botxt">©Copyright2022 MealOnWheel All rights reserved</p>
      </div>
    </footer>
  );
}

export default contact;
