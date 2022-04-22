import React, { useState, useEffect } from 'react'
import { Form, Table, Tag, Checkbox, Row, Col } from 'antd';

import './Tables.scss'

function TableV5() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true)

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name', },
    { title: 'Age', dataIndex: 'age', key: 'age', },
    {
      title: 'Tags', key: 'tags', dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map(tag => {
            return (
              <Tag key={tag}>
                <Checkbox onClick={(e) => console.log(e)} />
              </Tag>
            );
          })}
        </>
      ),
    },
    { title: 'Address', dataIndex: 'address', key: 'address', },

  ];

  const data = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', r },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['developer'], },
    { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['developer'], },
  ];

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false)
    }, 1151);
  }, [])

  return (
    <div className="container">

      <Form form={form}>
        <Row gutter={[24]}>
          <Col span={16}>
            <Table loading={loading} columns={columns} dataSource={data} />
          </Col>
        </Row>

      </Form>
    </div>
  )
}
export default TableV5;