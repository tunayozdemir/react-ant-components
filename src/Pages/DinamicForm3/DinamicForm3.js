import React, { useState, useEffect } from 'react';
import { Select, Card, Row, Col, Checkbox, Button, Input, Form, Radio } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

const options = [
  { id: 0, value: '25 Mbps Limitsiz (Akşam 6, Sabah 6 - 100Mbps) - Duruşehir' },
  { id: 1, value: '50 Mbps Limitsiz (Akşam 6, Sabah 6 - 100Mbps) - Duruşehir' },
  { id: 2, value: '100 Mbps Limitsiz (Akşam 6, Sabah 6 - 100Mbps) - Duruşehir' },
];

const cardData = {
  0: [
    { id: 0, title: 'Modem/ Generic / Ücretsiz', defaultSerialNumber: 'Q48w16602003847', defaultModemSegment: 'WIFI5' },
    { id: 1, title: 'TURKCELL TV STB', defaultSerialNumber: 'Q48w16602003847', defaultModemSegment: 'WIFI5' },
    { id: 2, title: 'Ont Modem', defaultSerialNumber: 'Q48w16602003847', defaultModemSegment: 'WIFI5' },
  ],
  1: [
    { id: 3, title: 'Başka Kart 1', defaultSerialNumber: 'XYZ123', defaultModemSegment: 'WIFI6' },
    { id: 4, title: 'Başka Kart 2', defaultSerialNumber: 'ABC456', defaultModemSegment: 'WIFI6' },
  ],
  2: [
    { id: 5, title: 'Farklı Kart 1', defaultSerialNumber: '123XYZ', defaultModemSegment: 'WIFI7' },
  ],
};

const MyForm = () => {
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardsData, setSelectedCardsData] = useState({});
  const [radioValues, setRadioValues] = useState({});
  const [placeholderValues, setPlaceholderValues] = useState({});


  const handleCheckboxChange = (cardId) => {
    setSelectedCards((prev) => (prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]));
    // Seçilen kartı sıfırla
    setSelectedCardsData((prev) => {
      const { [cardId]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleRadioChange = (cardId, value) => {
    setRadioValues((prev) => ({
      ...prev,
      [cardId]: value,
    }));

    setPlaceholderValues((prev) => ({
      ...prev,
      [cardId]: value ? "Test 2" : "Test 1",
    }));

    console.log('selectedOption :',selectedOption)

    setSelectedCardsData((prev) => ({
      ...prev,
      [cardId]: {
        ...cardData[selectedOption][cardId],
        value,
      },
    }));
  };


  const handleInputChange = (cardId, inputType, value) => {
    setSelectedCardsData((prev) => ({
      ...prev,
      [cardId]: {
        ...prev[cardId],
        [inputType]: value,
      },
    }));
  };

  const handleSelectChange = (value) => {
    console.log('value :',value)
    setSelectedOption(value);
    setSelectedCards([]);
    form.resetFields();
    setSelectedCardsData({});
  };

  const onFinish = (values) => {
    console.log('Form Değerleri:', values);
    const selectedCardsDataArray = selectedCards.map((cardId) => ({
      ...selectedCardsData[cardId],
      input1: values['input1'],
      radio: values[`${cardId}_radio`],
    }));
    console.log('Seçilen Kart Bilgileri:', selectedCardsDataArray);
  };

  useEffect(() => {
    form.resetFields(); // Yeni bir seçenek seçildiğinde formu sıfırla
    setSelectedCardsData({});
  }, [selectedOption, form]);

  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Select
          placeholder="Hız Seçiniz"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          {options.map((option) => (
            <Option key={option.id} value={option.id}>
              {option.value}
            </Option>
          ))}
        </Select>

        {selectedOption !== null && (
          <>
            <Row gutter={16} style={{ marginTop: '20px' }}>
              {cardData[selectedOption].map((card) => (
                <Col key={card.id} span={8}>
                  <Card title={(
                    <Checkbox
                      checked={selectedCards.includes(card.id)}
                      onChange={() => handleCheckboxChange(card.id)}
                    >
                      {card.title}
                    </Checkbox>
                  )}>
                    {selectedCards.includes(card.id) && (
                      <>
                        <p>Serial Number: {card.defaultSerialNumber}</p>
                        <p>Modem Segment: {card.defaultModemSegment}</p>

                        <Form.Item
                          name={`${card.id}_radio`}
                          rules={[{ required: true, message: 'Bu alan zorunlu' }]}
                        >
                          <Radio.Group onChange={(e) => handleRadioChange(card.id, e.target.value)}>
                            <Radio value={true}>Evet</Radio>
                            <Radio value={false}>Hayır</Radio>
                          </Radio.Group>
                        </Form.Item>

                        {radioValues[card.id] != null ? (
                          <Form.Item
                            name={`${card.id}_input`}
                            rules={[
                              { required: selectedCardsData[card.id]?.value === true, message: 'Bu alan zorunlu' },
                            ]}
                          >
                            <Input
                              placeholder={placeholderValues[card.id]}
                              onChange={(e) => handleInputChange(card.id, 'input', e.target.value)}
                              disabled={selectedCardsData[card.id]?.value !== true}
                            />
                          </Form.Item>
                        ) : null}
                      </>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>

            <Button type="primary" htmlType="submit">
              Formu Gönder
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default MyForm;
