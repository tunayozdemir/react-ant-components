import React from 'react';
import { Menu } from "antd";
import Navigation from "./Navigation/Navigation"
import './SideBar.scss'


function SideBar() {

  return (
    <Menu>
      <Navigation />
    </Menu>
  )
}

export default SideBar;
