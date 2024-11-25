import React from "react";
import "../style/navbar.css";

const NavBar = () => {
  return (
    <div className="nav-header container">
      <div className="logo-box">Musics</div>

      <div className="navbar">
        <ul className="nav-lists">
          <li>
            <a href="#">Favourites</a>
          </li>
          {/* <li>
            <a href="#">Collections</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
