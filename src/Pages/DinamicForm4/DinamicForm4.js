import React, { useState } from 'react';
import { Form, Input, Button, Typography, Row, Col, Checkbox, Select, Space, Card } from 'antd';


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

const DinamicForm4 = () => {
  const [form] = Form.useForm()
  const [newList, setNewList] = useState([])

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
        fieldKey: i,
        isListField: true,
        key: i,
        name: 'Asd' + value[i],
        variant_key: "shoes-size",
        variant_values: value[i],
        title: '12345'
      })
    }
    form.setFieldsValue({ variants: data })
    setNewList(data)
  }

  const handleCheckBox =()=>{
    form.setFieldsValue({ variants: newList })
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      fields={newList}
    >
      <Row gutter={[24, 16]}>
        <Col span={24}>
          <Form.Item shouldUpdate>
            <Select options={options} onChange={handleSelected} />
          </Form.Item>
        </Col>
        <Form.List
          name={'variants'}
          // initialValue={newList}
          fields={[newList]}
        >
          {(fields, { }) => {
            return (
              fields.map(({ key, name, ...field }, index) => {
                return (
                  <Col span={24} key={key}>
                    <Card title={'test'} extra={<Checkbox onChange={(e) => handleCheckBox(e.target.checked)} />}>
                      <Row gutter={[24, 16]}>
                        <Col span={10}>
                          <Form.Item noStyle {...field} name={[name, 'name']} initialValue={form.getFieldValue().name}>
                            <Input placeholder={'Harga Regular'} value={newList.name} />
                          </Form.Item>
                        </Col>
                        <Col span={10}>
                          <Form.Item noStyle {...field} name={[name, 'price_reseller']} >
                            <Input placeholder={'Harga Reseller'} />
                          </Form.Item>
                        </Col>
                        <Col span={10}>
                          <Form.Item noStyle  {...field} name={[name, 'price_vendor']} >
                            <Input placeholder={'Harga Vendor'} />
                          </Form.Item>
                        </Col>
                        <Col span={10}>
                          <Form.Item noStyle {...field} name={[name, 'stock']} >
                            <Input placeholder={'Stock'} />
                          </Form.Item>
                        </Col>
                        <Col span={10}>
                          <Form.Item noStyle {...field} name={[name, 'sku']} >
                            <Input placeholder={'SKU'} />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Card>
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
    </Form>

  )
}



// sdfsdf

export default DinamicForm4