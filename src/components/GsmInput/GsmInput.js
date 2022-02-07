import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import IntlTelInput from 'react-intl-tel-input';
// //import libphonenumber from 'google-libphonenumber';

import 'react-intl-tel-input/dist/main.css';
import './GsmInput.scss'



const GsmInput = (props) => {
  const { placeholder, fieldName, fieldId, onChange, refInputVal } = props
  const [isFocus, setIsFocus] = useState(false)
  const [isLabel, setLabel] = useState(false)


  const onLabel = () => {
    setLabel("wrapper")
    setIsFocus(true)
  }

  const onLabelBlur = () => {
    const val = refInputVal.current.state.value
    console.log("val:", val)
    setIsFocus(false)
    if (val) {
      setLabel("wrapper")
    } else {
      setLabel("")
    }
  }

  const handleWrapper = () => {
    const val = refInputVal.current.state.value
    setIsFocus(true)
    if (val) {
      setLabel("wrapper")
    } else {
      setLabel("")
    }
  }

  useEffect(() => {

    setTimeout(() => {
      window.intlTelInputUtils.numberFormat.INTERNATIONAL = window.intlTelInputUtils.numberFormat;
      window.intlTelInputUtils.numberFormat.NATIONAL = window.intlTelInputUtils.numberFormat;
    }, 1000);
  }, [])



  return (
    <div className={isLabel ? "wrapper" : ""}>
      <IntlTelInput {...props}
        containerClassName={classNames("intl-tel-input", { "focused": isFocus })}
        inputClassName="form-control"
        autoPlaceholder="aggressive"
        initialCountry="auto"
        numberType="number"
        defaultCountry="tr"
        preferredCountries={['tr']}
        placeholder={!isLabel === false ? "" : true}
        fieldName={fieldName}
        fieldId={fieldId}
        onPhoneNumberChange={(state, value) => {
          onChange(value.replace(/^(?!\s)[A-Za-z\s]+$/g, ''))
        }}
        onPhoneNumberFocus={onLabel}
        onPhoneNumberBlur={onLabelBlur}
        separateDialCode={true}
        autoHideDialCode={false}
        formatOnInit={true}
        ref={refInputVal}
        format={true}
      >
      </IntlTelInput>
      <label onClick={handleWrapper}>{placeholder}</label>
    </div>
  )
}

GsmInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  fieldName: PropTypes.string,
  fieldId: PropTypes.number,
  refInputVal: PropTypes.any,
};

GsmInput.defaultProps = {
  placeholder: "Telefon Numarası",
  onChange: () => { }
}

export default GsmInput;
