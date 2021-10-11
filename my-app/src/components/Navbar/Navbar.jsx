import React from "react";
import classes from "./Navbar.module.css";

const Navbar = ({ children, ...props }) => {
  return (
    <header className={classes.Navbar}>
      <h1 className={classes.NavbarTitle}>Rick and Morty</h1>
    </header>
  );
};

export default Navbar;
