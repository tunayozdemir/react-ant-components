import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Radio } from 'antd';
import { AntInput } from "../../../Antd"
import './RadioGroup.scss'

const RadioGroup = (props) => {
  const { text, radioData, placeholder, defaultValue } = props;
  const [checkBoxValue, setCheckBoxValue] = useState(props.value.value)
  const [inpVal, setInpVal] = useState(props.value.inputValue)


  const handleChange = (check) => {
    setCheckBoxValue(check.target.value)
  }

  const inputHandleChange = (e) => {
    setInpVal(e.target.value)
  }

  return (
    <div className="radio-group">
      <span>{text}</span>
      <Radio.Group
        {...props}
        options={radioData}
        defaultValue={defaultValue}
        value={checkBoxValue}
        {...props.onChange({ value: checkBoxValue, inputValue: inpVal })}
        onChange={handleChange}
      />
      {checkBoxValue === 0 ? <AntInput label={placeholder} value={inpVal}
        onChange={inputHandleChange} /> : null}
    </div>
  )
}

RadioGroup.propTypes = {
  text: PropTypes.string,
  radioData: PropTypes.array,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  changeValue: PropTypes.func,
  value: PropTypes.object
};

RadioGroup.defaultProps = {
  text: "Şirketin üst düzey yönetimi ile kıdemli pazarlama, ürün, servis, proje ve satış geliştirme pozisyonlarında olup geçmişte Turkcell’de çalışmış olan var mı veya bu pozisyonlarda olup Turkcell’de halen çalışmakta olan yakını olan var mı?",
  changeValue: () => { }
}
export default RadioGroup;