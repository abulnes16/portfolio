import React, { useRef, useState, useEffect } from "react";

const Header = () => {
  const menu = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    menu.current.classList.toggle("is-active");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="brand">
        <a href="#hero">Angel Bulnes</a>
      </div>
      
      <div className="menu-icon-container" onClick={toggleMenu}>
        <span
          id="menu-btn"
          className="iconify icon-lg burguer-btn"
          data-icon="ant-design:menu-outlined"
          data-inline="false"
        ></span>
      </div>

      <nav ref={menu} id="menu" className="menu">
        <ul>
          <li className="menu-link" onClick={toggleMenu}>
            <a href="#hero">Home</a>
          </li>
          <li className="menu-link" onClick={toggleMenu}>
            <a href="#about">About Me</a>
          </li>
          <li className="menu-link" onClick={toggleMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-link" onClick={toggleMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
