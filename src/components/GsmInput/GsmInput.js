import React, { useState, useEffect, useRef } from 'react'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import classNames from "classnames";

function GsmInput(props) {
  const { onChange } = props
  const [mobileTitle, setMobileTitle] = useState(false);
  const [isFocus, setIsFocus] = useState(false)
  const [val, setVal] = useState()

  const ref = useRef()

  useEffect(() => {
    const el = document.querySelector(".intl-tel-input.iti-container");
    if (el) {
        el.onclick = function () {
            setMobileTitle(false)
        }
    }
});

  return (

      <IntlTelInput {...props}
        containerClassName={classNames("intl-tel-input", { "focused": isFocus })}
        inputClassName="form-control"
        autoComplete='on'
        separateDialCode={true}
        defaultCountry={"tr"}
        value={val}
        ref={ref}
        numberType="number"
        onPhoneNumberChange={(state, value) => { setVal(value) }}
        preferredCountries={false}
        onFlagClick={() => { setMobileTitle(!mobileTitle) }}
        onSelectFlag={() => { setMobileTitle(false) }}
        noCountryDataHandler={() => setMobileTitle(false)}
        onPhoneNumberFocus={() => { setIsFocus(true) }}
        onPhoneNumberBlur={() => setIsFocus(false)}
        format={true}
      />
  )
}
export default GsmInput