import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>Option 1</Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>Option 2</Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}> Option 3</Menu.Item>
      </Menu>
    </div>
  )
}

export default Dashboard;
