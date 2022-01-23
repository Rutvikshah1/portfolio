import React from "react";
import classes from "./SearchResultLinks.module.css";

const SearchResultLinks = ({ url, title, description }) => {
  return (
    <div className={classes.searchlink_wrapper}>
      <div className={classes.url}>{url}</div>
      <div className={classes.title}>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default SearchResultLinks;
