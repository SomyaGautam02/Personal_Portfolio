import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">SG</h1>

        <ul className="footer__list">
          <li>
            <a href="a" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="a" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="a" className="footer__link">
              About
            </a>
          </li>
        </ul>

        <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/somya-gautam//"
              className="home__social-icon"
            >
              <i class="uil uil-linkedin"></i>
            </a>
            <a
              href="https://github.com/SomyaGautam02/"
              className="home__social-icon"
            >
              <i class="uil uil-github"></i>
            </a>
          </div>
            <span className="footer__copy"> &#169; SomyaGautam. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
