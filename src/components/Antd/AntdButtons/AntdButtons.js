import React, { useState } from 'react'
import { Button, Tooltip, Radio, Row, Col, Card, Space } from 'antd';
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './AntdButtons.scss'

function Buttons() {
  const [size, setSize] = useState('large');
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };

  return (
    <>
      <Row gutter={[24, 16]}>
        <Col span={8}>
          <Card title="Primary Button">
            <Row gutter={[24, 16]}>
              <Col >
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
              </Col>
              <Col>
                <Space style={{ width: '100%' }} >
                  <Button type="primary" size={size}>Primary</Button>
                  <Button size={size}>Default</Button>
                  <Button type="dashed" size={size}>Dashed</Button>
                </Space>
              </Col>
              <Col>
                <Space style={{ width: '100%' }} >
                  <Button type="primary" icon={<DownloadOutlined />} size={size} />
                  <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                  <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                  <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>Download</Button>
                  <Button type="primary" icon={<DownloadOutlined />} size={size}>Download </Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Search Button">
            <Row gutter={[24, 16]}>
              <Col >
                <Tooltip title="search">
                  <Space style={{ width: '100%' }}>
                    <Button shape="circle" icon={<SearchOutlined />} />
                    <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                  </Space>
                </Tooltip>
              </Col>
              <Col>
                <Space>
                  <Button icon={<SearchOutlined />} href="#" />
                  <Button icon={<SearchOutlined />}>Search</Button>
                  <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
                </Space>
              </Col>
              <Col>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                  <Space>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size} />
                  </Space>
                </Radio.Group>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Disabled Button">
            <Row gutter={[24, 16]}>
              <Col>
                <Button type="primary" disabled>Primary(disabled)</Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Danger Button">
            <Row gutter={[24, 16]}>
              <Col>
                <Button danger>Danger Default</Button>
              </Col>
              <Col>
                <Button danger disabled>Danger Default(disabled)</Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Loading Button">
            <Row gutter={[24, 16]}>
              <Col>
                <Space style={{ width: '100%' }} >
                  <Button type="primary" loading> Loading</Button>
                  <Button type="primary" size="small" loading>Loading</Button>
                  <Button type="primary" icon={<PoweroffOutlined />} loading />
                </Space>
              </Col>
              <Col>
                <Space
                  style={{ width: '100%', }} >
                  <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}> Click me!</Button>
                  <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)} >Click me!</Button>
                  <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[2]} onClick={() => enterLoading(2)} />
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Ghost Button">
            <Row gutter={[24, 16]}>
              <Col className="site-button-ghost-wrapper">
                <Space style={{ width: '100%' }} >
                  <Button type="primary" ghost>Primary</Button>
                  <Button ghost>Default</Button>
                  <Button type="dashed" ghost>Dashed</Button>
                  <Button type="primary" danger ghost> Danger</Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Block Button">
            <Button type="primary" block>Primary</Button>
            <Button block>Default</Button>
            <Button type="dashed" block>Dashed</Button>
            <Button type="link" block>Link</Button>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Buttons;
