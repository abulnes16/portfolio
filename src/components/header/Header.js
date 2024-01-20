import React, { useRef } from "react";

const Header = () => {
  const menu = useRef(null);

  const toggleMenu = () => {
    menu.current.classList.toggle("is-active");
  };

  return (
    <header className="header">
      <div className="menu-icon-container" onClick={toggleMenu}>
        <span
          id="menu-btn"
          className="iconify icon-lg burguer-btn"
          data-icon="ant-design:menu-outlined"
          data-inline="false"
        ></span>
      </div>
      <div className="brand">
        <h2>Angel Bulnes</h2>
      </div>
      <nav ref={menu} id="menu" className="menu">
        <ul>
          <li className="menu-link" onClick={toggleMenu}>
            <a href="#hero">Home</a>
          </li>
          <li className="menu-link" onClick={toggleMenu}>
            <a href="#about">About Me </a>
          </li>
          <li className="menu-link" onClick={toggleMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-link" onClick={toggleMenu}>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
