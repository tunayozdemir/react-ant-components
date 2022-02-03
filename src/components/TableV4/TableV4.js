import React, {useState} from 'react'
import 'antd/dist/antd.css';
import './TableV4.scss';
import { Table, Button } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

function TableV4() {

  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  console.log("selectedRowKeys :",selectedRowKeys)

  const start = () => {
    setSelectedRowKeys([])
  }
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <div>
        <Button type="primary" onClick={start}>Cansel</Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        onChange={(e)=>{console.log(e)}}
      />
    </div>
  )
}

export default TableV4;
