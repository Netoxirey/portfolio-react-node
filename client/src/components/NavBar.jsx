import { useState } from "react";
import NavBarMobile from "@components/NavBarMobile";
import hamburgerIcon from "../assets/hamburger_icon.svg";
import pageIcon from "../assets/page_icon.svg";
import { Link } from "react-router-dom";
import { links } from "../utils/utils";



function NavBar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <img src={pageIcon} alt="Page Icon" className="icon" />
          <ul className="navbar_links">
            {links?.map((link) => (
              <li key={link.name}><a href={link.anchor}>{link.name}</a></li>
            ))}
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
      <NavBarMobile show={isShow} toggle={setIsShow} />
    </>
  );
}

export default NavBar;
