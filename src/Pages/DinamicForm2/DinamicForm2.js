import React, { useState } from 'react';
import { Form, Input, Button, Typography, Row, Col, Checkbox, Select } from 'antd';


const office = [{
  name: "office Name",
  address: [
    { state: "State one", district: "District", city: "City Name", tole: "Tole" }
  ],
  contact: [
    { phone_no: "12343213", is_primary: true },
    { phone_no: "12343878", is_primary: false }
  ]
}]

const options = [
  {
    value: 'jack', label: 'Jack', name: 'jack', id: 0,
    address: [
      { state: "State one", district: "District", city: "City Name", tole: "Tole" }
    ],
    contact: [
      { phone_no: "12343213", is_primary: true },
      { phone_no: "12343878", is_primary: false }
    ]
  },
  {
    value: 'lucy', label: 'Lucy', name: 'lucy',
    address: [
      { state: "State one", district: "District", city: "City Name", tole: "Tole" }
    ],
    contact: [
      {
        phone_no: "12343213", is_primary: true,
        address: [
          { state: "State one", district: "District", city: "City Name", tole: "Tole" }
        ],
        contact: [
          { phone_no: "12343213", is_primary: true },
          { phone_no: "12343878", is_primary: false }
        ]
      },
      { phone_no: "12343878", is_primary: false }
    ]
  },
  {
    value: 'tom', label: 'Tom', name: 'tom',
    address: [
      { state: "State one", district: "District", city: "City Name", tole: "Tole" }
    ],
    contact: [
      { phone_no: "12343213", is_primary: true },
      { phone_no: "12343878", is_primary: false }
    ]
  },
]

const DinamicForm2 = () => {

  const [newList, setNewList] = useState([])

  const onFinish = (values) => {
    console.log('onFinish :', values);
  }

  const onFinishFailed = (values) => {
    console.log('onFinishFailed :', values);
  }

  const handleSelect = (value, select) => {
    setNewList([])
    let tempArr = options.filter(el => el.value === value)
    setNewList(tempArr)
  }
  console.log('newList :', newList)

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    // fields={[...newList]}
    // fields={[{ aaa: 'asdadad', bbb: '' }]}
    >
      <Row gutter={[12, 16]}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item shouldUpdate>
              <Select options={options} onChange={handleSelect} />
            </Form.Item>
          </Col>
          <Col span={24}>


            <Form.List
              name={['office', 'contact']}
              initialValue={[{ aaa: 'asdadad', bbb: '' }]}
            >
              {(fields, { }) => {
                return (
                  <>
                    {fields.map(({ key, name, ...restField }) => {
                      return (
                        <Row gutter={14} key={key} align="middle">
                          <Col md={14} xs={18}>
                            <Form.Item
                              {...restField}
                              name={[name, 'aaa']}
                              label="Aaaaa"
                              rules={[{ required: true, message: 'Phone no is required.' },]}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>

                      )
                    })}
                  </>
                )
              }}
            </Form.List>

          </Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit"> Submit </Button>
          </Col>
        </Row>
      </Row>
    </Form>

  )
}



// sdfsdf

export default DinamicForm2