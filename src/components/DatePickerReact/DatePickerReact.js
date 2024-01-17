
import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2'

const DatePickerReact = React.forwardRef((props, ref) => {

  const addDays = (date, days) => {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
  }

  const [value, setValue] = useState(/*addDays(new Date(),props.shift || 0 )*/);

  React.useImperativeHandle(ref, () => ({
    setDate(date) {
      onChange(addDays(date, 0))
    }
  }));

  const onChange = (val) => {
    if (props.minDate === undefined) {
      setValue(val)
    }
    else {

      var d1 = new Date(props.minDate);
      var d2 = new Date(val);
      var isSmaller = d1.getTime() >= d2.getTime();
      //console.log(d1)
      if (isSmaller) {
        Swal.fire('Tarih Hatası', "Bitiş tarihi başlangıç tarihinden küçük veya aynı olamaz!", "error")
      }
      else {
        setValue(val)
      }
    }
  }
  const yesterday = new Date()
  const disablePastDt = current => {
    return current.isAfter(yesterday);
  };

  useEffect(() => {
    if (props.getDate !== undefined) {
      props.getDate(value)
    }
  }, [value])

  return (
    <div>
      <DateTimePicker
        minDate={props.disablePast && new Date()}
        onChange={onChange}
        value={value}
        format={"dd.MM.yyyy"}
        disabled={props.disabled || false}
      />
    </div>
  );
})


export default DatePickerReact;