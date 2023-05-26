import React, { useState } from 'react'
import { Table, Input } from 'antd';

import 'antd/dist/antd.css';




function TableV8() {
  const [name, setName]=useState()
  const data = [
    { key: "1", name: "John Brown", age: 32, address: "New York No. 1 Lake Park" },
    { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
    { key: "3", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
    { key: "4", name: "Jim Red", age: 32, address: "London No. 2 Lake Park" }
  ];
  debugger
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [name],
      onFilter: (value, record) => record.name.indexOf(value) === 0
    },
    {
      title: "Age",
      dataIndex: "age",
      filters: [
        { text: "London", value: 32 },
        { text: "New York", value: 33 }
      ],
      filteredValue: [],
      filterIcon: () => <></>,
      onFilter: (value, record) => record.age === value,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" }
      ],
      filterIcon: () => <></>,
      filteredValue: [],
      onFilter: (value, record) => record.address.indexOf(value) === 0
    }
  ];




  return (
    <>
      <Input placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
      <Table columns={columns} dataSource={data} />
    </>

  )
}
export default TableV8;