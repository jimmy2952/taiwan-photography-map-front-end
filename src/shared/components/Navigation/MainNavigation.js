import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop"
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }
  return (
    <div className={classes.MainNavigation}>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button onClick={openDrawerHandler}>
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
      </MainHeader>
    </div>
  );
};

export default MainNavigation;
