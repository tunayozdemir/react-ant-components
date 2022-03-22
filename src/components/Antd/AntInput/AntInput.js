import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
import { Input } from 'antd';

import './AntInput.scss'

const AntInput = (props) => {
  const { title, label, value, content } = props
  const [inputFocused, setInputFocused] = useState(false);

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

  useEffect(() => {
    if (value) {
      setInputFocused(true);
    } else {
      setInputFocused(false)
    }
  }, [value]);

  return (
    <div className={classNames('ant-inputs', { 'wrapper': inputFocused })} >
      <h5 className='ant-inputs__title'>{title}</h5>
      <Input
        {...props}
        value={value}
        onBlur={blurInput}
        onFocus={focusInput}
        onChange={(e) => { onChange(e) }}
      />
      <label className='ant-inputs__label'>{label}</label>
      <span className='ant-inputs__content'>{content}</span>
    </div>
  )
}

AntInput.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};

AntInput.defaultProps = {
  title: "",
  label: "",
}

export default AntInput;
