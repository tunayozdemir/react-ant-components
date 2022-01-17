
import React from "react";
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import { TableOutlined, EnterOutlined } from '@ant-design/icons'
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
            <SubMenu key="sub1" icon={<TableOutlined />} title="Tables Componntes">
              <Menu.ItemGroup key="g1" title="Tables">
                <Menu.Item key="1">Tablo 1</Menu.Item>
                <Menu.Item key="2">Tablo 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<EnterOutlined />} title="Inputs Compontnes">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
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
