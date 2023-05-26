import React, { useState, useEffect } from 'react'
import { Table, Tag, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './Tables.scss'

const columns = [
  { title: 'Id', dataIndex: 'id' },
  { title: 'First Name', dataIndex: 'firstName' },
  { title: 'Last Name', dataIndex: 'lastName' },
  { title: 'Not', dataIndex: 'not' },
  {
    title: 'Age', dataIndex: 'age',
    render: (tag) => {
      const color = tag.includes('33') ? 'Green' : tag.includes('28') ? 'blue' : tag.includes('59') ? 'black' : 'red'
      return <Tag color={color} key={tag}>{tag}</Tag>
    }
  }
];

const dataSource = [
  { key: '0', id: 0, firstName: 'Tunay', lastName: 'Özdemir', not: "50", age: '33' },
  { key: '1', id: 1, firstName: 'Hayriye', lastName: 'Özdemir', not: "92", age: '28' },
  { key: '2', id: 2, firstName: 'Asya', lastName: 'Özdemir', not: "100", age: '1,5' },
  { key: '3', id: 3, firstName: 'Gülay', lastName: 'Özdemir', not: "72", age: '59' },
  { key: '4', id: 4, firstName: 'Duman', lastName: 'Özdemir', not: "45", age: '13' }
];


function TableV1() {
  const [defaultSelectRow, setDefaultSelectRow] = useState(['2'])
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false)
    }, 900);
  }, [])

  return (
    <div className="container">
      <Row className="gutter-row" gutter={[24, 1]}>
        <Col span={24}>
          <Table
            loading={loading}
            columns={columns}
            dataSource={dataSource}
            rowSelection={{
              type: 'checkbox',
              selectedRowKeys: defaultSelectRow,
              onChange: (keys) => { setDefaultSelectRow(keys) },
              onSelect: (record) => { console.log({ record }) },
              getCheckboxProps: (record) => ({ disabled: record.age === '33' }),
              hideSelectAll: false,
              selections: [
                Table.SELECTION_NONE, {
                  key: 'key',
                  text: 'Tümünü Kaldır',
                },
                Table.SELECTION_ALL, {
                  key: 'key',
                  text: 'Tümünü Seç',
                },
                Table.SELECTION_INVERT,
                {
                  key: 'even',
                  text: 'Çift Satırları Seç',
                  onSelect: (allKeys) => {
                    const selectedKeys = allKeys.filter(key => {
                      return key % 2 === 0
                    })
                    setDefaultSelectRow(selectedKeys)
                  },
                },
                {
                  key: 'excellent',
                  text: 'Notu 50 Olanları seç',
                  onSelect: (allKeys) => {
                    const selectedKeys = allKeys.filter(key => {
                      const isExcellent = dataSource.find(student => {
                        return student.key === key && student.not.includes('50')
                      })
                      return isExcellent;
                    })
                    setDefaultSelectRow(selectedKeys)
                  },
                },
              ],
            }}
          >
          </Table>
        </Col>
      </Row>

    </div>
  )
}
export default TableV1;