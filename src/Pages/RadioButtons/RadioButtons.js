import React from 'react';
import { RadioBtnV1, RadioGroup } from '../../components/Antd/'
import { Row, Col } from "antd";

const radioData = [
  { "value": 0, "label": "Evet" },
  { "value": 1, "label": "Hayır" }
]

function RadioButtons() {
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <RadioBtnV1 />
        </Col>
        <Col span={12}>
          <RadioGroup
            radioData={radioData}
            defaultValue={1}
            value={{ value: 1, inputValue: '' }}
            onChange={(value) => { console.log(value) }}
            text="Turkcell veya grup şirketleriyle daha evvel feshedilmiş bir sözleşme var mı?"
            placeholder="Turkcell veya grup şirketleriyle daha evvel feshedilmiş bir sözleşme var mı?"
          />
        </Col>

      </Row>

    </div>
  )
}

export default RadioButtons;
