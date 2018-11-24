import * as React from 'react'
import { Component, MouseEvent } from 'react'

import { withRouter, RouteComponentProps } from 'react-router'
import { Route } from 'react-router-dom'

import NewPatientForm from './NewPatientForm/NewPatientForm'
import Patient from './model/Patient'
import AllPatients from './AllPatients/AllPatients'
import AdmissionRequests from './AdmissionRequests/AdmissionRequests'
import { NavBar, NavbarItem } from './NavBar'
import { LocalStorageAdmissionRequestService } from './service/AdmissionRequestService'
import PrintHeader from './PrintHeader'
import StartAdmission from './StartAdmission/StartAdmission'
import Admission from './model/Admission'

import './App.css'
import AdmissionLaw from './model/AdmissionLaw'

interface State {
  admissionRequests: Admission[]
  currentAdmission?: Admission
}

const admissionRequestService = new LocalStorageAdmissionRequestService()

class App extends Component<RouteComponentProps, State> {
  state: State = {
    admissionRequests: admissionRequestService.loadAll(),
  }

  newAdmissionRequest = (patient: Patient) => {
    this.setState(
      ({ admissionRequests }) => ({
        admissionRequests: admissionRequests.concat([
          { patient, law: AdmissionLaw.Ten },
        ]),
      }),
      () => {
        admissionRequestService.save(patient)
        print()
      },
    )
  }

  setAdmission = (admission: Admission) => {
    this.setState(
      {
        currentAdmission: admission,
      },
      () => {
        this.props.history.push('/startAdmission')
      },
    )
  }

  renderNewPatientForm = () => (
    <NewPatientForm addPatient={this.newAdmissionRequest} />
  )
  renderAllPatients = () => <AllPatients patients={[]} />
  renderAdmissionRequests = () => (
    <AdmissionRequests
      startAdmission={this.setAdmission}
      requests={this.state.admissionRequests}
    />
  )
  renderStartAdmission = () => {
    const {
      state: { currentAdmission },
      setAdmission,
    } = this

    return currentAdmission ? (
      <StartAdmission
        admission={currentAdmission}
        changeAdmission={setAdmission}
      />
    ) : (
      this.renderNewPatientForm()
    )
  }

  navigate = (path: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    this.props.history.push(path)
  }

  showNewPatientForm = this.navigate('/newPatient')
  showAllPatients = this.navigate('/patients')
  showAdmissionRequests = this.navigate('/admissionRequests')

  render() {
    const {
      renderNewPatientForm,
      renderAllPatients,
      renderAdmissionRequests,
      renderStartAdmission,
      showNewPatientForm,
      showAllPatients,
      showAdmissionRequests,
      props: {
        location: { pathname },
      },
    } = this

    const navbarItems: NavbarItem[] = [
      {
        path: 'newPatient',
        onClick: showNewPatientForm,
        label: 'مريض جديد',
      },
      {
        path: 'admissionRequests',
        onClick: showAdmissionRequests,
        label: 'طلبات الدخول',
      },
      {
        path: 'patients',
        onClick: showAllPatients,
        label: 'كل المرضى',
      },
    ]

    return (
      <div className="App">
        <NavBar pathname={pathname} items={navbarItems} />

        <PrintHeader />

        <main className="App-container">
          <Route path="/" exact render={renderNewPatientForm} />
          <Route path="/newPatient" render={renderNewPatientForm} />
          <Route path="/admissionRequests" render={renderAdmissionRequests} />
          <Route path="/startAdmission" render={renderStartAdmission} />
          <Route path="/patients" render={renderAllPatients} />
        </main>
      </div>
    )
  }
}

export default withRouter(App)
