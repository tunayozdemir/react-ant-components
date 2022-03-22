import React, { useRef } from 'react';
import { AntInput } from '../../components/Antd'
import {GsmInput} from '../../components/'
import { Form, Row, Col, Button } from "antd";

import "./InputForm.scss"

function InputForm() {
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
        <Col span={5}>
          <Form.Item name="input3" rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
            <AntInput type="text" title='Text'  label='Label...' content="Sub Title 1" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="input4" rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
            <AntInput type="number"title='Number'label='Label...'content="Sub Title 2" onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}/>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="input4" rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
            <GsmInput type="phone" title='Text'  label='Label...' content="Sub Title 1" />
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

export default InputForm;
