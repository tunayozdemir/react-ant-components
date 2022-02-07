import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import PropTypes from "prop-types";
import SideBar from "../Sidebar/SideBar"
import Title from 'antd/lib/typography/Title'
import { Layout, Avatar, Breadcrumb } from 'antd';
// import { EnterOutlined } from '@ant-design/icons'
import Lion from '../../../assets/image/lion.png'
import AntdLogo from '../../../assets/icons/antdLogo.svg'
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
          <Avatar className='layout-header__left-side-logo' size="large" src={AntdLogo} />
          <Title level={3}>Ant Desing</Title>
        </div>
        <Avatar size="large" src={Lion} />
      </Header>

      <Layout key="2" className='layout-sider'>

        <Sider className='layout-sider__wrap'>
          <SideBar />
        </Sider>

        <Content className='layout-content'>
          <Content className='layout-content__breadcrumb' style={{ padding: '0 50px' }}>
            <div style={{ margin: '16px 0' }}>
              {breadCrumbView()}
            </div>
            <hr/>
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
