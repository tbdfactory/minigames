import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../images/favicon.png";
import { useState } from "react";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header>
      <nav className="nav">
        <section className="nav-container container">
          <div onClick={handleClick} className={`${isActive ? "active" : ""} hamburger`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <figure className="figure">
            <img className="minigame-logo" src={logo}></img>
            <h3>minigames</h3>
          </figure>
          <div className={`${isActive ? "active" : ""} nav-links`}>
            <p className="m-0 tag-name opacity">Hi, Miguel!</p>
            <div className="d-flex">
              <i className="padding logo-moon opacity">
                <DarkModeIcon color="white" fontSize="large"></DarkModeIcon>
              </i>
              <i className="padding navbar-icon opacity">
                <GitHubIcon color="white" fontSize="inherit"></GitHubIcon>
              </i>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
}

export default NavBar;
