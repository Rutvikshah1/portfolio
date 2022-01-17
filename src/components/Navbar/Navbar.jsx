import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div>GOOGLE LOGO</div>
      <div>
        <div>SEARCHBAR</div>
        <div>LINKS</div>
      </div>
      <div>PROFILE ICON</div>
    </div>
  );
};

export default Navbar;
