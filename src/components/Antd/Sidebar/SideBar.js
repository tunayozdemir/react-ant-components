import React, { useState } from 'react';
import Navigation from "./Navigation/Navigation"
import { Button, Switch } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './SideBar.scss'

const SideBar = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const changeTheme = (value) => {
    setTheme(value)
  }

  return (

    <div className='sidebar'>
      <div className='sidebar-btn'>
        <Button type="primary" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <Navigation
        {...props}
        inlineCollapsed={collapsed}
        theme={theme === false ? "light" : "dark"}
      />
      <Switch
        checked={theme}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </div>

  )
}

export default SideBar;
