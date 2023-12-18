import closeIcon from "../assets/close_icon.svg";
import { links } from "../utils/utils";
import cv from "../assets/Ernesto Serna English.pdf"
// eslint-disable-next-line react/prop-types
function NavBarMobile({show, toggle}) {
  return (
    <nav className={`nav_mobile ${show ? "nav_mobile-show" : ""}`}>
          <button 
            className="nav_icon"
            onClick={() => toggle(false)}
          >
            <img src={closeIcon} alt="Close Icon" />
          </button>
          {links?.map((link) => (
            <a 
            key={link.name} 
            href={link.anchor}>
              {link.name}
            </a>
          ))}
          <a href={cv} download target="_blank" className="btn_overline" rel="noreferrer">Download Cv</a>
        </nav>
  )
}

export default NavBarMobile