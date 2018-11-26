import * as React from 'react'

import logo from './logo.png'

const PrintHeader = () => (
  <header className="PrintHeader">
    <img className="App-logo" src={logo} />
    <div className="push-1">
      <div>مستشفى دار الإسكندرية للإستشفاء</div>
      <div>١٤ شارع المصحة - ونجت</div>
      <div>ت: ٥٢٤٤٣٥٣-٥٤٥٤١٠٣ فاكس: ٥٢٤٤١٤٩</div>
    </div>
  </header>
)

export default PrintHeader
