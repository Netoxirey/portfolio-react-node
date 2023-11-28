import closeIcon from "../assets/close_icon.svg";
import { links } from "../utils/utils";

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
          <a href="cv" className="btn_overline">Download Cv</a>
        </nav>
  )
}

export default NavBarMobile