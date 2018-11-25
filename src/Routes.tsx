import * as React from 'react'
import { Route } from 'react-router-dom'

import AdmissionRequests from './AdmissionRequests/AdmissionRequests'
import AllPatients from './AllPatients/AllPatients'
import NewPatientForm from './NewPatientForm/NewPatientForm'
import StartAdmission from './StartAdmission/StartAdmission'

const Routes = () => (
  <>
    <Route path="/" exact component={NewPatientForm} />
    <Route path="/newPatient" component={NewPatientForm} />
    <Route path="/admissionRequests" component={AdmissionRequests} />
    <Route path="/startAdmission" component={StartAdmission} />
    <Route path="/patients" component={AllPatients} />
  </>
)

export default Routes
