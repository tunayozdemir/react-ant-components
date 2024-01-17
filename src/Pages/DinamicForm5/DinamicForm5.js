import React, { useState } from 'react';
import { Form, Input, Button, Typography, Row, Col, Checkbox, Select, Space, Card, Collapse } from 'antd';

const options = [
  {
    value: '1', label: 'Jack', name: 'jack', id: 0,
    address: [
      { state: "State one", district: "District", city: "City Name", tole: "Tole" }
    ],
    contact: [
      { phone_no: "12343213", is_primary: true },
      { phone_no: "12343878", is_primary: false }
    ]
  },
  {
    value: '12', label: 'Lucy', name: 'lucy',
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
    value: '123', label: 'Tom', name: 'tom',
    address: [
      { state: "State one", district: "District", city: "City Name", tole: "Tole" }
    ],
    contact: [
      { phone_no: "12343213", is_primary: true },
      { phone_no: "12343878", is_primary: false }
    ]
  },
]

const { Panel } = Collapse;


const DinamicForm5 = () => {
  const [form] = Form.useForm()


  const onFinish = (values) => {
    console.log('onFinish :', values);
  }

  const onFinishFailed = (values) => {
    console.log('onFinishFailed :', values);
  }

  const handleSelected = (value) => {

    let data = []
    for (let i = 0; i < value.length; i++) {
      data.push({
        key: i,
        fieldKey: i,
        isListField: true,
        name: '',
        variant_key: "shoes-size",
        variant_values: value[i],
        title: '12345'
      })
    }

    form.setFieldsValue({ variants: data })
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={[24, 16]}>
        <Col span={24}>
          <Form.Item shouldUpdate>
            <Select options={options} onChange={handleSelected} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Card>
            <Row gutter={[24, 16]}>
              <Form.List
                name={'variants'}
              >
                {(fields, { }) => {
                  return (
                    fields.map(({ key, name, ...field }, index) => {
                      return (
                        <Col span={24} key={key}>
                          <Collapse key={key} defaultActiveKey={0}>
                            <Panel header={form.getFieldValue().variants[key].title}>
                              <Row gutter={[24, 16]}>
                                <Col span={10}>
                                  <Form.Item rules={[{ required: true, message: 'test' }]} {...field} name={[name, 'name']}>
                                    <Input placeholder={'Harga Regular'} />
                                  </Form.Item>
                                </Col>
                                <Col span={10}>
                                  <Form.Item rules={[{ required: true, message: 'test' }]} {...field} name={[name, 'fieldKey']}>
                                    <Input placeholder={'Harga Regular'} />
                                  </Form.Item>
                                </Col>
                                {
                                  form.getFieldValue().variants?.map(prevVariants=>{
                                    return(
                                      <div>aaaa</div>
                                    )
                                  })
                                }
                              </Row>
                            </Panel>
                          </Collapse>
                        </Col>
                      )
                    }
                    )
                  )
                }}

              </Form.List>
              <Col span={24}>
                <Button type="primary" htmlType="submit"> Submit </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Form>
  )
}

export default DinamicForm5