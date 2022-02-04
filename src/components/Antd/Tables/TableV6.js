import React from 'react';
import 'antd/dist/antd.css';
import { Table, Typography } from 'antd';

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
  return (
    <>
      <Table
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
    </>
  )
}
export default TableV6;