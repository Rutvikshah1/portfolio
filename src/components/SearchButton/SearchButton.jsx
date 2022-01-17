import React from "react";
import classes from "./SearchButton.module.css";

const SearchButton = () => {
  return (
    <div className={classes.button}>
      <input type="button" value="Google Search " />
      <input type="button" value="I'm Feeling Lucky " />
    </div>
  );
};

export default SearchButton;
