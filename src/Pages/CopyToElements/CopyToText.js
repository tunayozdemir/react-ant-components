import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

function CopyToText() {
  const [value, setValue] = useState("")
  const [copied, setCopied] = useState(false)

  const onInputChange = (e) => {
    setValue(e.target.value)
    setCopied(false)
  }

  return (
    <div>
      <input value={value} onChange={onInputChange} />
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}><button>Metni Kopyala</button></CopyToClipboard>
      {copied ? <span style={{ color: 'green' }}>Kopyalandı</span> : null}
    </div>
  )
}

export default CopyToText