
import React, { useState, Component, useRef } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Collapse, Row, Col, Table } from 'antd';
import Clipboard from 'react-clipboard.js';


const { Panel } = Collapse;

const dataSource = [
  { key: '1', name: 'Mike', age: 32, address: '10 Downing Street', },
  { key: '2', name: 'John', age: 42, address: '10 Downing Street', },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', },
  { title: 'Age', dataIndex: 'age', key: 'age', },
  { title: 'Address', dataIndex: 'address', key: 'address', },
];

const contentList = [
  { id: 1, title: "DSL IP Alamama" },
  { id: 2, title: "Laudem et expedita distinctio nam libero tempore, cum teneam sententiam." },
  { id: 3, title: "Et quidem rerum necessitatibus saepe eveniet, ut alterum esse vult." },
]

function Clipboards() {
  const [value, setValue] = useState("")
  const [copied, setCopied] = useState(false)
  const refTable = useRef();

  const onInputChange = (e) => {
    setValue(e.target.value)
    setCopied(false)
  }

  function callback(key) {
    console.log(key)
  }

  function onSuccess (){
    console.log("sfsdfd")
  }

  function getText(){
    const result = refTable.current.innerHTML
    return result;
  }
  

  return (
    <div>
      {/* Birinci durumu */}
      <input
        value={value}
        onChange={onInputChange}
      />
      <CopyToClipboard text={value}
        onCopy={() => setCopied(true)}>
        <button>Metni Kopyala</button>
      </CopyToClipboard>

      {copied ? <span style={{ color: 'green' }}>Kopyalandı</span> : null}


      {/* İkinci durumu */}
      <Collapse onChange={callback} defaultActiveKey={['0']}>
        {
          contentList.map((item, index) => {
            return (
              <Panel
                key={index}
                header={item.title}
                extra={
                  <Clipboard 
                  key={index} 
                  onSuccess={onSuccess}  
                  onClick={(event)=>{event.stopPropagation()}}
                  option-text={getText}
                  >
                    Panoya Kopyala
                  </Clipboard>
                }>
                <Row gutter={[24, 16]}>
                  <Col span={24}>
                    <Table ref={refTable} dataSource={dataSource} columns={columns} />
                  </Col>
                </Row>
              </Panel>
            )
          })
        }
      </Collapse>
    </div>
  )
}

export default Clipboards