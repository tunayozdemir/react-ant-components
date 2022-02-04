import React, { useState} from 'react'
import { Radio, Space } from 'antd';

const data = [
  {
    "id": 1,
    "text": "Lorem 1",
    "options":
      [
        { "value": 1, "label": "Evet", "name": "radio1" },
        { "value": 2, "label": "Hayır", "name": "radio2" },
      ]
  },
  {
    "id": 2,
    "text": "Lorem 2",
    "options":
      [
        { "value": 3, "label": "Evet", "name": "radio1" },
        { "value": 4, "label": "Hayır", "name": "radio2" },
      ]
  },
  {
    "id": 3,
    "text": "Lorem 3",
    "options":
      [
        { "value": 5, "label": "Evet", "name": "radio1" },
        { "value": 6, "label": "Hayır", "name": "radio3" },
      ]
  },
]

const RadioBtn = () => {

  const [value, setValue] = useState(1)

  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div>
      {data.map((item, index) => {
        return (
          <Radio.Group onChange={(e) => handleChange(e)} value={value} key={index}>
            <Space direction="horizontal">
              {item.options.map((e, i) => {
                return (
                  <Radio name={e.name} key={i} checked={value === e.value} value={e.value}>{e.label}</Radio>
                )
              })}
            </Space>
          </Radio.Group>
        )
      })
      }
    </div>
  )
}
export default RadioBtn;
