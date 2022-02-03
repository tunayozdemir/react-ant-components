import React from 'react';
import PropTypes from "prop-types";
import SideBar from "../Sidebar/SideBar"
import Title from 'antd/lib/typography/Title'
import { Layout, Avatar, Breadcrumb  } from 'antd';
import { EnterOutlined } from '@ant-design/icons'

const { Header, Footer, Sider, Content } = Layout;
const Layoute = (props) => {


  return (
    <Layout>
      <Header>
        <Title style={{ color: "white" }} level={3}>Ant Desing</Title>
        <Avatar size="large" src={EnterOutlined} />
      </Header>
      <Layout>
        <Sider>
          <SideBar />
        </Sider>
        <Content>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              {props.children}
            </div>
          </Content>
        </Content>

      </Layout>
      <Footer>Footer</Footer>
    </Layout>


  )
}
Layoute.propTypes = {
  children: PropTypes.any,
}

export default Layoute;
