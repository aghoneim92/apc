import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement,
)
registerServiceWorker()
