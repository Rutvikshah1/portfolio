import React from "react";
import classes from "./Navbar.module.css";
import google from "../../assets/images/google.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div>
        <img
          src={google}
          className={classes.google}
          onClick={() => navigate("/")}
        />
      </div>
      <div className={classes.searcbar_wrapper}>
        <span class="material-icons searchicon">search</span>
        <input
          type="text"
          placeholder="Search google or type a URL"
          className={classes.searchbar}
        />
        <div>
          <ul className={classes.suggestion_lists}>
            <li>
              <Link to={"/about-me"}>About Me</Link>
            </li>
            <li>
              <Link to={"/experience"}>Experience</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/education"}>Education</Link>
            </li>
            <li>
              <Link to="/files/resume.pdf" target="_blank" download>
                Download Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.icons_wrapper}>
        <div>
          <span class="material-icons-outlined">settings</span>
        </div>
        <div>
          <span class="material-icons-outlined">apps</span>
        </div>
        <div>
          <span class="material-icons-outlined">account_circle</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
