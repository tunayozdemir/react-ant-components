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
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.ItemGroup key="g1" title="Ant Desing Componentler">
        <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Buttons">Buttons</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/Inputs">Inputs</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/Cards">Cards</Link></Menu.Item>
      </Menu.ItemGroup>

      <SubMenu key="sub1" title="Tablolar">
        <Menu.ItemGroup key="g2" title="Versionlar">
          <Menu.Item key="14"><Link to="/TablePageV1">Table V1</Link></Menu.Item>
          <Menu.Item key="15"><Link to="/TablePageV2">Table V2</Link></Menu.Item>
          <Menu.Item key="16"><Link to="/TablePageV3">Table V3</Link></Menu.Item>
          <Menu.Item key="17"><Link to="/TablePageV4">Table V4</Link></Menu.Item>
          <Menu.Item key="18"><Link to="/TablePageV5">Table V5</Link></Menu.Item>
          <Menu.Item key="19"><Link to="/TablePageV6">Table V6</Link></Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

    </Menu>
  )
}

export default Navigation;
