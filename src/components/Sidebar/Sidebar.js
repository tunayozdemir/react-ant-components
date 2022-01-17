
import React from "react";
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import { AppstoreOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons'
// import { Link } from 'react-router-dom';
// import routes from '../../Route';
import AvatarLion from '../../assets/icons/lion.png'
import Title from 'antd/lib/typography/Title'
import './Sidebar.scss'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;


function Sidebar() {

  const handleClick = (e) => {
    console.log('click ', e);
  }

  return (
    <Layout>
      <Header>
        <Title style={{ color: "white" }} level={3}>Ant Desing</Title>
        <Avatar size="large" src={AvatarLion} />
      </Header>
      <Layout>
        <Sider>
          <Menu
            onClick={handleClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
          </Content>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

  );
}

export default Sidebar;
