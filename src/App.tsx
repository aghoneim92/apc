import * as React from 'react'
import { Component, MouseEvent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

import { NavBar, NavbarItem } from './Components/NavBar'
import PrintHeader from './Components/PrintHeader'
import Routes from './Routes'

import './App.css'

class App extends Component<RouteComponentProps> {
  navigate = (path: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    this.props.history.push(path)
  }

  showNewPatientForm = this.navigate('/newPatient')
  showAllPatients = this.navigate('/patients')
  showAdmissionRequests = this.navigate('/admissionRequests')

  get navbarItems(): NavbarItem[] {
    const { showNewPatientForm, showAllPatients, showAdmissionRequests } = this

    return [
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
  }

  render() {
    const {
      navbarItems,
      props: {
        location: { pathname },
      },
    } = this

    return (
      <div className="App">
        <NavBar pathname={pathname} items={navbarItems} />

        <PrintHeader />

        <main className="App-container">
          <Routes />
        </main>
      </div>
    )
  }
}

export default withRouter(App)
