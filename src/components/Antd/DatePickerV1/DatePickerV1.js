import React, {useState} from 'react'
import { DatePicker, Calendar, Select, Row,Col } from "antd";

const DatePickerV1 = () => {
  const [isOpen, setIsOpen]=useState()

  return (
    <div>
      <DatePicker
        open={isOpen}
        panelRender={() => {
          return (
            <div style={{ width: 300, border: "1px solid #d9d9d9", borderRadius: 4 }}>
              <Calendar
                fullscreen={false}
                headerRender={({ value, type, onChange, onTypeChange }) => {
                  
                  const start = 0;
                  const end = 12;
                  const monthOptions = [];
                  const current = value.clone();
                  const localeData = value.localeData();
                  const months = [];
                  for (let i = 0; i < 12; i++) {
                    current.month(i);
                    months.push(localeData.months(current));
                  }

                  for (let index = start; index < end; index++) {
                  
                    monthOptions.push(
                      
                      <Select.Option className="month-item" key={`${index}`}>
                        {months[index]}
                      </Select.Option>
                    );
                  }
                  const month = value.month();

                  const year = value.year();
                  const options = [];
                  for (let i = year - 10; i < year + 10; i += 1) {
                    options.push(
                      <Select.Option key={i} value={i} className="year-item">
                        {i}
                      </Select.Option>
                    );
                  }
                  return (
                    <div style={{ padding: 10 }}>
                      <div style={{ marginBottom: "10px" }} />
                      <Row type="flex" justify="space-between">
      
                        <Col span={8}>
                          {/* <LeftArrow onClick={null} /> */}
                          <div onClick={(a) => { console.log(a) }}>a</div>
                        </Col>
                        <Col span={8}>
                          {/* <FaChevronLeft /> */}
                          <Select
                            size="small"
                            dropdownMatchSelectWidth={false}
                            value={String(month)}
                            onChange={selectedMonth => {
                              const newValue = value.clone();
                              newValue.month(parseInt(selectedMonth, 10));
                              onChange(newValue);
                            }}
                          >
                            {monthOptions}
                          </Select>
                          <p />
                        </Col>
                        <Col span={8}>
                          {/* <RightArrow onClick={null} /> */}
                        </Col>
                      </Row>
                    </div>
                  );
                }}
              />
            </div>
          )

        }}
      />
    </div>
  )
}

export default DatePickerV1