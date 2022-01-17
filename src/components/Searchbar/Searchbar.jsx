import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./Searchbar.module.css";

const Searchbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className={classes.searchbar}>
      <span class="material-icons searchicon">search</span>
      <input
        type="text"
        name=""
        onClick={() => setSearchActive(true)}
        placeholder="Search google or type a URL"
      />
      {searchActive && (
        <>
          <ul className={classes.suggestion_lists}>
            <li>
              <Link to={"/experience"}>About me</Link>
            </li>

            <li>Experience</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Links</li>
            <li>
              <div class="material-icons searchicon"></div>Download Resume
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Searchbar;
