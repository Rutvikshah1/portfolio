import React from "react";
import google from "../../assets/images/google.png";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchButton from "../../components/SearchButton/SearchButton";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={classes.container}>
        <img src={google} className={classes.google} />
        <Searchbar />
        <SearchButton />
      </div>
    </>
  );
};

export default HomePage;
