import React, { useState, useRef } from 'react';
import InputV1 from '../../components/Antd/Inputs/V1/InputV1'
import { Form, Row, Col, Button } from "antd";

function Inputs() {
  const [value, setValue] = useState()

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
      <Row gutter={[24, 16]}>

        <Col span={6}>
          <Form.Item name="input1" rules={[{ required: value ? false : true, message: 'Bu alan boş geçilemez' }]}>
            <h4>Text</h4>
            <InputV1 type="text" label="Test" onChange={(e) => setValue(e.target.value)} value={value} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="input2" rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
            <h4>Number</h4>
            <InputV1 type="number" label="Number" onChange={(e) => console.log(e)}
              onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Button htmlType="submit">Gönder</Button>
          <Button onClick={onReset}>Vazgeç</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Inputs;
