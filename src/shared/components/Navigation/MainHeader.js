import React from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <div className={classes.MainHeader}>
      <button onClick={props.open}>
        <span />
        <span />
        <span />
      </button>
      <h1>
        <Link to="/">台灣攝影地圖</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </div>
  );
};

export default MainHeader;
