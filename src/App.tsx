import * as React from 'react'
import { Component } from 'react'

// import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import Header from './Header'

import './App.css'
import NewPatientForm from './NewPatientForm/NewPatientForm'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="App-container">
          <NewPatientForm />
        </main>
      </div>
    )
  }
}
