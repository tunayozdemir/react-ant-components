import React from 'react';
import 'antd/dist/antd.css';
import DatePicker from '../../components/DatePickerReact/DatePickerReact'
import { StylingCalendar, DatePickerV1 } from '../../components/Antd'
import { Space } from 'antd';

function Dashboard() {

  return (
    <Space direction="vertical">
      <DatePicker />
      {/* <StylingCalendar /> */}
      <DatePickerV1 />
    </Space>
  )
}

export default Dashboard;
