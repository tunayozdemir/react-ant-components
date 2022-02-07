import React, { useRef } from 'react';
import { Form, Row, Col, Button } from "antd";
import TelInput from '../../components/GsmInput/GsmInput'

function GsmInputPage() {

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
    <div>
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
            <Form.Item name="tel1" rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
              <TelInput label="Telefon Numarası" placeholder='sf'  />
            </Form.Item>
          </Col>

          <Col span={[24]}>
            <Button htmlType="submit">Gönder</Button>
            <Button onClick={onReset}>Vazgeç</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default GsmInputPage;
