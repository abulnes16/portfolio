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
          <li className="menu-link">
            <a href="#hero">Home</a>
          </li>
          <li className="menu-link">
            <a href="#about">Acerca de mi </a>
          </li>
          <li className="menu-link">
            <a href="#projects">Proyectos</a>
          </li>
          <li className="menu-link">
            <a href="#contact">Contáctame</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
