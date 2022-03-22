import React, { useState } from 'react';
import { Collapse, Row, Col, Button, notification } from 'antd';
import { HorizontalTable } from "../../components/Antd"
import { CopyOutlined, InfoCircleOutlined } from '@ant-design/icons';
import "./CopyToBoard.scss";

const { Panel } = Collapse;

const contentList = [
  { id: 1, title: "DSL IP Alamama" },
  { id: 2, title: "Laudem et expedita distinctio nam libero tempore, cum teneam sententiam." },
  { id: 3, title: "Et quidem rerum necessitatibus saepe eveniet, ut alterum esse vult." },
]

const columns = [
  { title: '', dataIndex: 'title', key: 'title', width: '25%' },
  { title: '', dataIndex: 'dot', key: 'dot', width: "1px" },
  { title: '', dataIndex: 'text', key: 'text', },
];

const dataSource = [
  { key: '1', title: 'BNG Adı', dot: ":", text: "lipsumsitametdolo" },
  { key: '2', title: 'BNG Port', dot: ":", text: "loremipsumdolorsita" },
  { key: '3', title: 'Son Bağlantı Zamanı', dot: ":", text: "2020-09-08 15:15:25" },
  { key: '4', title: 'Modem IP', dot: ":", text: "b4-343535-35353-343" },
  { key: '5', title: 'Modem MAC', dot: ":", text: "b4-343535-35353-343" },
  { key: '6', title: 'Altyapı', dot: ":", text: "Fiber" },
  { key: '7', title: 'Kullancı ID', dot: ":", text: "34564783@fiber" },
  { key: '8', title: 'Data Kaynağı', dot: ":", text: "Solarc" },
];

function CopyToBoard() {
  const [activeColleps, setActiveColleps] = useState()

  function callback(key) {
    console.log("key", key)
    setActiveColleps(key)
  }

  function copyToClipboard(html) {
    var container = document.createElement('table');
    container.innerHTML = html;
    // container.style.position = 'fixed';
    // container.style.pointerEvents = 'none';
    // container.style.opacity = 0;
    document.body.appendChild(container);
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(container);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    document.body.removeChild(container);
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

  function handleOnClick(index) {
    setActiveColleps(index)
    setTimeout(() => {
      var htmlEditor = document.getElementById(index)
      if (htmlEditor !== null) {
        copyToClipboard(htmlEditor.innerHTML);
        showNotification("success", "Panoya kopyalandı.");
      } else {
        showNotification("error", "Panoya kopyalama işlemi başarısız.");
      }
    }, 100);
  }

  return (
    <div className="copy-to-board">
      <div className="copy-to-board__info">
        <InfoCircleOutlined />
        <span>Aşağıdan genel arıza şablonlarını açıp kopyalayabilirsiniz.</span>
      </div>
      {
        contentList.map((item, index) => {
          return (
            <Collapse onChange={callback} activeKey={activeColleps}>
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
                    <HorizontalTable id={index} dataSource={dataSource} columns={columns} />
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          )
        })
      }
      <div className='copy-to-board__btn-group'>
        <div>
          <Button>İptal</Button>
          <Button>Müşteri Hattan Düştü</Button>
        </div>
        <div><Button>Geri</Button></div>
      </div>
    </div>
  )
}


export default CopyToBoard;
