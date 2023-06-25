import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/somya-gautam//"
        className="home__social-icon"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a href="https://github.com/SomyaGautam02/" className="home__social-icon">
        <i class="uil uil-github"></i>
      </a>

      <a href="#home" className="home__social-icon" target="_blank">
        <i class="uil uil-globe"></i>
      </a>
    </div>
  );
};

export default Social;
