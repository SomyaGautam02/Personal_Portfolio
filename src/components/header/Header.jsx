import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    /*=======================Toogle Menu=================== */
    const[Toogle,showMenu]= useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Somya Gautam
        </a>
        <div className={Toogle ? "nav__menu show-menu":"nav__menu"}>
          <ul className="nav__list grid">
            {/* <li className="nav__item">
              <a href="a" className="nav__link">
                <i className="uil uil-estate nav__i"></i> Home
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__i"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__i"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__i"></i> Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="mailto:somyagautam02@gmail.com" className="nav__link">
                <i className="uil uil-message nav__i"></i> Contact
              </a>
            </li>
          </ul>

          <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toogle)}></i>
        </div>
        <div className="nav__toogle" onClick={()=>showMenu(!Toogle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
