import React, { useState, useEffect } from 'react'
import { Table, Typography, Row, Col } from 'antd';

import './Tables.scss'

const { Text } = Typography;

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Borrow', dataIndex: 'borrow' },
  { title: 'Repayment', dataIndex: 'repayment' },
];

const data = [
  { key: '1', name: 'John Brown', borrow: 10, repayment: 33 },
  { key: '2', name: 'Jim Green', borrow: 5, repayment: 0 },
  { key: '3', name: 'Joe Black', borrow: 10, repayment: 10 },
  { key: '4', name: 'Jim Red', borrow: 7, repayment: 5 },
];

function TableV6() {

  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false)
    }, 952);
  }, [])
  return (
    <div className="container">
      <Row gutter={[24]}>
        <Col span={16}>
          <Table
          loading={loading}
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            summary={(pageData) => {
              let totalBorrow = 0;
              let totalRepayment = 0;

              pageData.forEach(({ borrow, repayment }) => {
                totalBorrow += borrow;
                totalRepayment += repayment;
              });

              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell>Total</Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text type="danger">{totalBorrow}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text>{totalRepayment}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
        </Col>
      </Row>

    </div>
  )
}
export default TableV6;