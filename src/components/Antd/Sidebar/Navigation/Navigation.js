import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';

const { SubMenu } = Menu;

const Navigation = () => {

  const handleClick = e => {
    console.log('click ', e);
  };

  return (

    <Menu
      onClick={handleClick}
      defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
      <SubMenu key="sub1" title="Antd Components">
        <Menu.ItemGroup key="g1">
          <Menu.Item key="2"><Link to="/Buttons">Buttons</Link></Menu.Item>
          <SubMenu key="sub2" title="Inputs">
            <Menu.Item key="3"><Link to="/InputPageV1">Input V1</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/InputPageV2">Input V12</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="5"><Link to="/Cards">Cards</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/RadioButtons">Radio Buttons</Link></Menu.Item>
        </Menu.ItemGroup>
        <SubMenu key="sub3" title="Tablolar">
          <Menu.Item key="14"><Link to="/TablePageV1">Table V1</Link></Menu.Item>
          <Menu.Item key="15"><Link to="/TablePageV2">Table V2</Link></Menu.Item>
          <Menu.Item key="16"><Link to="/TablePageV3">Table V3</Link></Menu.Item>
          <Menu.Item key="17"><Link to="/TablePageV4">Table V4</Link></Menu.Item>
          <Menu.Item key="18"><Link to="/TablePageV5">Table V5</Link></Menu.Item>
          <Menu.Item key="19"><Link to="/TablePageV6">Table V6</Link></Menu.Item>
          <Menu.Item key="20"><Link to="/TablePageV7_Dnd">Table Drag and Drop</Link></Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key="21"><Link to="/GsmInputPage">React Intl Tel Input</Link></Menu.Item>
      <SubMenu key="sub4" title="Material-Ui">
        <Menu.ItemGroup key="g4">
          <Menu.Item key="22"><Link to="/TablePageV1">Lorem1</Link></Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default Navigation;
