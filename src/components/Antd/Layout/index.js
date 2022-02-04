import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import PropTypes from "prop-types";
import SideBar from "../Sidebar/SideBar"
import Title from 'antd/lib/typography/Title'
import { Layout, Avatar, Breadcrumb } from 'antd';
import { EnterOutlined } from '@ant-design/icons'
import './Layout.scss'

const { Header, Footer, Sider, Content } = Layout;
const Layoute = (props) => {
  const location = useLocation()

  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item)
    return (
      <div>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Table</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Table</Breadcrumb.Item>
          )}
          {
            pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
              const isLast = index === pathnames.length - 1
              return isLast ? (
                <Breadcrumb.Item>{name}</Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item>
                  <Link to={`${routeTo}`}>{name}</Link>
                </Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
      </div>
    )
  }

  return (
    <Layout className='layout'>
      <Header className='layout-header'>
        <Title style={{ color: "white" }} level={3}>Ant Desing</Title>
        <Avatar size="large" src={EnterOutlined} />
      </Header>
      <Layout className='layout-sider'>
        <Sider className='layout-sider__wrap'>
          <SideBar />
        </Sider>
        <Content className='layout-content'>
          <Content className='layout-content__breadcrumb' style={{ padding: '0 50px' }}>
            <div style={{ margin: '16px 0' }}>
              {breadCrumbView()}
            </div>
            <div className='layout-content__children'>
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
