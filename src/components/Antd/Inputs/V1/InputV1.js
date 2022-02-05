import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
import { Input as InputAntd } from "antd";

import './InputV1.scss';

const InputV1 = (props) => {
  const { label, value, content } = props
  const [inputFocused, setInputFocused] = useState(false);


  /*const onLabel = () => {
    setLabel("wrapper")
  }

  const onLabelBlur = () => {
    const val = refInputVal.current.state.value
    if (val) {
      setLabel("wrapper")
    } else {
      setLabel("")
    }
  }*/

  useEffect(() => {
    if (value) {
      setInputFocused(true);
    } else {
      setInputFocused(false)
    }
  }, [value]);

  function onChange(e) {
    props.onChange(e);

    if (e.target.value.length) {
      setInputFocused(true);
    } else {
      setInputFocused(false);
    }
  }

  function focusInput() {
    setInputFocused(true);
  }

  function blurInput(e) {
    if (!e.target.value.length) {
      setInputFocused(false);
    }
  }

  return (
    <div className={classNames('input', { 'wrapper': inputFocused })} >
      <InputAntd {...props} value={value} onChange={(e) => { onChange(e) }} onBlur={blurInput} onFocus={focusInput} />
      <label>{label}</label>
      <span className='input__content'>{content}</span>
    </div>
  )
}

InputV1.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
};

InputV1.defaultProps = {
  label: ""
}


export default InputV1;
