import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Searchbar.module.css";

const Searchbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className={classes.searchbar}>
      <span class="material-icons searchicon">search</span>
      <input
        type="text"
        onClick={() => setSearchActive(true)}
        placeholder="Search google or type a URL"
        className={classes.searchbox}
      />
      {searchActive && (
        <>
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
            <li>Download Resume</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Searchbar;
