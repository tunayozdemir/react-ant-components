import React from 'react'
import { Form, Input, Button, Divider, Typography, Row, Col, Checkbox, Card ,Select} from 'antd';

const options = [
  {value:'Lorem 1'},
  {value:'Lorem 2'},
  {value:'Lorem 3'}
]

const DinamicForm = () => {

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Row gutter={[20, 20]}>
        <Col span={20}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: '' },]} >
            <Input placholder="Full name" />
          </Form.Item>
        </Col>
      </Row>

      {/* User Info */}
      <Row gutter={[20, 20]}>
        <Col span={10}>
          <Card title='User Info'>
            <Row gutter={[10, 20]}>
              <Col span={10}>
                <Form.Item name={['user', 'phone_no']} label="Phone No." rules={[{ required: true,  message: ''},]} >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item name={['user', 'email']} label="Email">
                  {/* <Input type="email" /> */}
                  <Input  />
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={10}>
          <Card title='Office Address'>
            <Row gutter={[10, 20]}>
              <Col span={5}>
                <Form.Item name={['office', 0, 'address', 0, 'state']} label="State" rules={[{ required: true, message: '' },]} >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item name={['office', 0, 'address', 0, 'district']} label="District" rules={[{ required: true,  message: ''},]} >
                  <Select options={options} />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item name={['office', 0, 'address', 0, 'city']} label="City" rules={[{ required: true, message: '' },]} >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item name={['office', 0, 'address', 0, 'tole']} label="Tole">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[20, 20]}>
        <Col span={20}>
          <Divider />
        </Col>
      </Row>

      {/* Office Contact */}
      <Form.List
        name={['office', 0, 'contact']}
        // initialValue={[{ phone_no: '', is_primary: false, },]}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row gutter={[20, 20]} key={key} align="middle">
                <Col span={20}>
                  <Card title='Office Contact'>
                    <Row gutter={[10, 20]}>
                      <Col span={10}>
                        <Form.Item  {...restField} name={[name, 'phone_no']} rules={[{ required: true, message: '' },]} label="Phone No" >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={10} offset={2}>
                        <Form.Item {...restField} name={[name, 'is_primary']} valuePropName="checked" label="Is primary?" >
                          <Checkbox />
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <div onClick={() => remove(name)} style={{ cursor: 'pointer', }} >Sil X</div>
                      </Col>
                    </Row>
                  </Card>
                  <Col span={24}>
                    <Divider />
                  </Col>
                </Col>
              </Row>
            ))}
            <Row gutter={[20, 20]}>
              <Col span={20}>
                <Form.Item >
                  <Button type="dashed" onClick={() => add()} icon="+" block size="large"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                    Add another contact
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Form.List>
      <Row gutter={[20, 20]}>
        <Col span={20}>
          <Form.Item>
            <Button type="primary" htmlType="submit" block> Submit </Button>
          </Form.Item>
        </Col>
      </Row>


    </Form>
  )
}

export default DinamicForm