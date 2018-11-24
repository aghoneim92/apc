import * as React from 'react'
import { Component, MouseEvent } from 'react'

import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap'
import { withRouter, RouteComponentProps } from 'react-router'
import { Route } from 'react-router-dom'

import NewPatientForm from './NewPatientForm/NewPatientForm'
import { Patient } from './NewPatientForm/Patient'
import AllPatients from './AllPatients/AllPatients'

import logo from './logo.png'

import './App.css'
import { LocalStoragePatientService } from './PatientService'

interface State {
  patients: Patient[]
}

const patientService = new LocalStoragePatientService()

class App extends Component<RouteComponentProps, State> {
  state = {
    patients: [],
  }

  addPatient = (patient: Patient) => {
    this.setState(
      ({ patients }) => ({ patients: patients.concat([patient]) }),
      () => {
        patientService.save(patient)
        print()
      },
    )
  }

  renderNewPatientForm = () => <NewPatientForm addPatient={this.addPatient} />
  renderAllPatients = () => <AllPatients patients={this.state.patients} />

  showNewPatientForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    this.props.history.push('/newPatient')
  }

  showAllPatients = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    this.props.history.push('/patients')
  }

  render() {
    const {
      renderNewPatientForm,
      renderAllPatients,
      showNewPatientForm,
      showAllPatients,
      props: {
        location: { pathname },
      },
    } = this
    return (
      <div className="App">
        <Navbar className="noprint" light expand="md">
          <NavbarBrand href="/">
            <img className="App-logo" src={logo} />
          </NavbarBrand>
          <div className="push-1">
            <div>مستشفى دار الإسكندرية للإستشفاء</div>
          </div>
          <Nav className="ml-auto noprint" navbar>
            <NavItem>
              <NavLink
                href="/newPatient"
                active={pathname === '/' || pathname.includes('newPatient')}
                onClick={showNewPatientForm}
              >
                مريض جديد
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/patients"
                active={pathname.includes('patients')}
                onClick={showAllPatients}
              >
                كل المرضى
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <header className="PrintHeader">
          <img className="App-logo" src={logo} />
          <div className="push-1">
            <div>مستشفى دار الإسكندرية للإستشفاء</div>
            <div>١٤ شارع المصحة - ونجت</div>
            <div>ت: ٥٢٤٤٣٥٣-٥٤٥٤١٠٣ فاكس: ٥٢٤٤١٤٩</div>
          </div>
        </header>

        <main className="App-container">
          <Route path="/" exact render={renderNewPatientForm} />
          <Route path="/newPatient" render={renderNewPatientForm} />
          <Route path="/patients" render={renderAllPatients} />
        </main>
      </div>
    )
  }
}

export default withRouter(App)
