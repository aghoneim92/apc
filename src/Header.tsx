import * as React from 'react'

import logo from './logo.png'

const Header = () => (
  <header className="App-header">
    <section className="App-header-top">
      <h4 className="App-intro">مستشفى دار الإسكندرية للإستشفاء</h4>
      <img className="App-logo" src={logo} />
    </section>

    <h1 className="App-title">طلب دخول مريض نفسي</h1>
  </header>
)

export default Header
