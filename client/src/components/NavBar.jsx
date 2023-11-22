import { useState } from "react";
import hamburgerIcon from "../assets/hamburger_icon.svg";
import closeIcon from "../assets/close_icon.svg";
import pageIcon from "../assets/page_icon.svg";

function NavBar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <img src={pageIcon} alt="Page Icon" className="icon" />
          <ul className="navbar_links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="cv" className="btn">Download Cv</a>
          <button 
            className="nav_icon"
            onClick={() => setIsShow(true)}
          >
            <img src={hamburgerIcon} alt="Hamburger Icon" />
          </button>
        </nav>
      </header>
      <nav className={`nav_mobile ${isShow ? "nav_mobile-show" : ""}`}>
          <button 
            className="nav_icon"
            onClick={() => setIsShow(false)}
          >
            <img src={closeIcon} alt="Close Icon" />
          </button>
          <a href="#">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="cv" className="btn_overline">Download Cv</a>
        </nav>
    </>
  );
}

export default NavBar;
