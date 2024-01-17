import React, { useState } from 'react'
import { Row, Col, Table, Radio } from 'antd'

import './TablesPage.scss'

const columns = [
  Table.SELECTION_COLUMN,
  { title: 'Adı', dataIndex: 'firstName', render: (text) => <div>{text}</div>, },
  { title: 'Soyadı', dataIndex: 'lastName', render: (text) => <div>{text}</div>, },
  { title: 'Yaşı', dataIndex: 'age', },
  { title: 'Adresi', dataIndex: 'address', },
]

const data = [
  { key: '1', firstName: 'John', lastName: 'Brown', age: 32, address: 'New York No. 1 Lake Park', },
  { key: '2', firstName: 'Jim', lastName: 'Green', age: 42, address: 'London No. 1 Lake Park', },
  { key: '3', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sidney No. 1 Lake Park', favoriteColor: 'red' },
]

const TableAndList = () => {

  const [column, setColumn] = useState(columns)
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState(1)

  const handleChangeTable = (e) => {

    let val = e.target.value
    setValue(val)

    if (parseInt(val) === 1) {
      setColumn(columns)
    }
    else {
      const renderColumn = [
        {
          title: '', dataIndex: 'firstName',
          render: (text, arr) => {
            return (
              <div>
                <div> {arr.firstName}</div>
                <div>{arr.lastName}</div>
                <div>{arr.age}</div>
              </div>
            )
          },
        },
        {
          title: '', dataIndex: 'address',
          render: (text, arr) => {
            return (
              <div>
                <div> {arr.address}</div>
                <div> {arr.favoriteColor}</div>
              </div>
            )
          },
        },
        Table.SELECTION_COLUMN,
      ]
      setColumn(renderColumn)
    }
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === 'Disabled User',
    //   name: record.name,
    // }),
  }

  return (
    <div className='table-and-list'>
      <Row gutter={[20, 20]}>
        <Col span={10}>
          <Radio.Group onChange={handleChangeTable} value={value}>
            <Radio value={1}>Tablo</Radio>
            <Radio value={2}>Liste</Radio>
          </Radio.Group>
        </Col>
        <Col span={20}>
          <Table
            className={parseInt(value) === 1 ? '' : 'table-desing'}
            dataSource={dataSource}
            columns={column}
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
          />
        </Col>
      </Row>
    </div>

  )
}

export default TableAndList