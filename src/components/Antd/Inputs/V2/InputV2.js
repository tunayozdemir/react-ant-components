import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
import { Input } from 'antd';

import './InputV2.scss'

const InputV2 = (props) => {
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
    <div className={classNames('input-v2', { 'wrapper': inputFocused })} >
      <h5 className='input-v2__title'>{title}</h5>
      <Input
        {...props}
        value={value}
        onBlur={blurInput}
        onFocus={focusInput}
        onChange={(e) => { onChange(e) }}
      />
      <label className='input-v2__label'>{label}</label>
      <span className='input-v2__content'>{content}</span>
    </div>
  )
}

InputV2.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};

InputV2.defaultProps = {
  title: "",
  label: "",
}

export default InputV2;
