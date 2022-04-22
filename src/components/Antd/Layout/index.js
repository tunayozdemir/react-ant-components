import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import PropTypes from "prop-types";
import SideBar from "../Sidebar/SideBar"
import Title from 'antd/lib/typography/Title'
import { Layout, Avatar, Breadcrumb } from 'antd';
import Lion from '../../../assets/image/lion.png'
import './Layout.scss'

const { Header, Footer, Content } = Layout;
const Layoute = (props) => {
  const location = useLocation()

  const breadCrumbView = () => {
    const { pathname } = location;

    const pathnames = pathname.split("/").filter((item) => item)
    return (
      <div>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item key="1">
              <Link to="/">Dashboard</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key="2">Dashboard</Breadcrumb.Item>
          )}
          {
            pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
              const isLast = index === pathnames.length - 1
              return isLast ? (
                <Breadcrumb.Item key={index}>{name}</Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={index}>
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
    <Layout key="1" className='layout'>
      <Header className='layout-header'>
        <div className='layout-header__left-side'>
          <Avatar className='layout-header__left-side-logo' size="large"  />
          <Title level={3}>Ant Desing</Title>
        </div>
        <Avatar size="large" src={Lion} />
      </Header>
      <Layout key="2" className='layout-sider'>
        <Content className='layout-content'>
          <SideBar />
          <Content className='layout-content__breadcrumb'>
            {breadCrumbView()}
            <hr />
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
