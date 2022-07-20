import React from "react";
import Header from "../UI/Header";

import classes from "./SideBar.module.css";
import SideBarMenu from "./SideBarMenu";

const SideBar = () => {
  return (
    <div className={classes.sideBarContainer}>
      <Header />
      <SideBarMenu />
    </div>
  );
};

export default SideBar;
