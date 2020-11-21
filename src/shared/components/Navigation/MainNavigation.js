import React, { useState } from "react";


import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop"

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }
  return (
    <header>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader open={openDrawerHandler} />
    </header>
  );
};

export default MainNavigation;
