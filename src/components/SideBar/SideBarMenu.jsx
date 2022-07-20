import React from "react";

import classes from './SideBarMenu.module.css'

const SideBarMenu = () => {
  return (
    <div>
      <ul>
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li><em>Inputs</em></li>
        <li>Grid</li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
