import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Switch } from 'antd';
import 'antd/dist/antd.css';

import {
  PhoneOutlined,
  ExpandOutlined,
  DeploymentUnitOutlined,
  PieChartOutlined,
  CopyOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Navigation = (props) => {
  const handleClick = e => {
    console.log('click ', e);
  };

  return (
    <>
      <Menu
        {...props}
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        inlineIndent={24}
        mode="inline"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}><Link to="/">Dashboard</Link></Menu.Item>
        <SubMenu key="sub1" icon={<DeploymentUnitOutlined />} title="Antd Components">
          <Menu.ItemGroup key="g1">
            <Menu.Item key="2"><Link to="/Buttons">Buttons</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/InputForm">InputForm</Link></Menu.Item>
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
            <Menu.Item key="21"><Link to="/TablePageV8">Table V8</Link></Menu.Item>
            <Menu.Item key="27"><Link to="/TablePageV9_Dynamic">TablePageV9 Dynamic</Link></Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title="Kopyalama">
          <Menu.Item key="22" icon={<CopyOutlined />}><Link to="/CopyToBoard">Copy To Board</Link></Menu.Item>
          <Menu.Item key="23" icon={<CopyOutlined />}><Link to="/CopyToText">Copy To Text</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title="Kesme">
          <Menu.Item key="24" icon={<ExpandOutlined />}><Link to="/ImageCrop">React Image Crop</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="25" icon={<PhoneOutlined />}><Link to="/GsmInputPage">React Intl Tel Input</Link></Menu.Item>
        <Menu.Item key="26" icon={<PhoneOutlined />}><Link to="/CheckboxComponent">Checkbox</Link></Menu.Item>
        <Menu.Item key="30" icon={<PhoneOutlined />}><Link to="/DinamicForm">Dinamic Form</Link></Menu.Item>
        <Menu.Item key="31" icon={<PhoneOutlined />}><Link to="/DinamicForm2">Dinamic Form2</Link></Menu.Item>
        <Menu.Item key="32" icon={<PhoneOutlined />}><Link to="/DinamicForm3">Dinamic Form3</Link></Menu.Item>
        <Menu.Item key="33" icon={<PhoneOutlined />}><Link to="/DinamicForm4">Dinamic Form4</Link></Menu.Item>
      </Menu>
    </>
  )
}

export default Navigation;
