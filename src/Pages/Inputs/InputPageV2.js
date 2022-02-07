import React, { useRef } from 'react';
import { InputV2 } from '../../components/Antd'
import { Form, Row, Col, Button } from "antd";

import "./InputPage.scss"

function InputPageV1() {
  const refForm = useRef()

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    refForm.current.resetFields();
  }

  return (

    <Form
      ref={refForm}
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">

      <Row className='inputs-container' gutter={[24, 1]}>
        <Col span={6}>
          <Form.Item name="input3" rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
            <InputV2
              type="text"
              title='Text'
              label='Label...'
              content="Sub Title 1"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="input4" rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
            <InputV2
              type="number"
              title='Number'
              label='Label...'
              content="Sub Title 2"
              onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
            />
          </Form.Item>
        </Col>

        <Col span={[24]}>
          <Button htmlType="submit">Gönder</Button>
          <Button onClick={onReset}>Vazgeç</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default InputPageV1;
