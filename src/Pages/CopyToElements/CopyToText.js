import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Row, Col } from 'antd';

function CopyToText() {
  const [value, setValue] = useState("")
  const [copied, setCopied] = useState(false)

  const onInputChange = (e) => {
    setValue(e.target.value)
    setCopied(false)
  }

  return (
    <Row gutter={[12, 16]}>
      <Col span={[2,2]}>
        <input value={value} onChange={onInputChange} />
      </Col>
      <Col span={[2,2]}>
        <CopyToClipboard text={value} onCopy={() => setCopied(true)}><button>Metni Kopyala</button></CopyToClipboard>
      </Col>
      <Col span={[2,2]}>
        {copied ? <span style={{ color: 'green' }}>Kopyalandı</span> : null}
      </Col>
    </Row>
  )
}

export default CopyToText