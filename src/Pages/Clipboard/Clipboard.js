
import React, { useState, Component, useRef } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Collapse, Row, Col, Table, Button, notification  } from 'antd';
import { CopyOutlined, InfoCircleOutlined } from '@ant-design/icons';
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

  function copyToClipboard(html) {
    var container = document.createElement('table');
    container.innerHTML = html;
    container.style.position = 'fixed';
    container.style.pointerEvents = 'none';
    container.style.opacity = 0;
    container.style.borderBottom = "1px solid red"
    document.body.appendChild(container);
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(container);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    document.body.removeChild(container);
    console.log("container :",container)
  }

  const showNotification = (type, messageDescription) => {

    let messageTitle = "İşlem başarılı";
    if (type !== "success") {
        messageTitle = "Hata alındı"
    }
    notification[type]({
        message: messageTitle,
        description: messageDescription,
    });
  }

  function handleOnClick (index) {
    // debugger
    var htmlEditor = document.getElementById(index)
    if (htmlEditor !== null) {
      copyToClipboard(htmlEditor.innerHTML);
      showNotification("success", "Panoya kopyalandı.");
    } else {
      showNotification("error", "Panoya kopyalama işlemi başarısız.");
    }
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
                  <Button onClick={(event) => { 
                    event.stopPropagation(); handleOnClick(index) 
                    }}>Panoya Kopyala<CopyOutlined />
                  </Button>
                }>
                <Row gutter={[24, 16]}>
                  <Col span={24}>
                    <Table id={index} ref={refTable} dataSource={dataSource} columns={columns} />
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