import * as React from 'react'
import { Component } from 'react'
import { Form, Button } from 'reactstrap'

import Admission from 'src/model/Admission'
import AdmissionLaw from 'src/model/AdmissionLaw'
import Law from './AdmissionLaw'
import { connect } from 'react-redux'
import State from 'src/model/State'
import Actions from 'src/actions'
import { RouteComponentProps } from 'react-router'
import Diagnosis from './Diagnosis'
import ReportInput from './ReportInput'
import Report from 'src/model/Report'
import AdmissionPeristenceService from 'src/service/AdmissionPersistenceService'

const AdmissionDate = () => (
  <div>تاريخ الدخول : {new Date().toLocaleDateString('ar-EG')}</div>
)

interface StateProps {
  currentAdmission?: Admission
}

interface DispatchProps {
  changeAdmission(
    admission: Admission,
  ): {
    type: Actions.UPDATE_ADMISSION
    payload: Admission
  }

  admitPatient(
    admission: Admission,
  ): {
    type: Actions.ADMIT_PATIENT
    payload: Admission
  }
}

interface Props extends StateProps, DispatchProps, RouteComponentProps {}

class StartAdmission extends Component<Props> {
  changeAdmissionLaw = (law: AdmissionLaw) => {
    const { changeAdmission, currentAdmission } = this.props

    if (currentAdmission) {
      changeAdmission({
        ...currentAdmission,
        law,
      })
    }
  }

  changeDiagnosis = (diagnosis: string) => {
    const { changeAdmission, currentAdmission } = this.props

    if (currentAdmission) {
      changeAdmission({
        ...currentAdmission,
        diagnosis,
      })
    }
  }

  changeReport = (report: Report) => {
    const { changeAdmission, currentAdmission } = this.props

    if (currentAdmission) {
      changeAdmission({
        ...currentAdmission,
        initReport: report,
      })
    }
  }

  doAdmit = () => {
    const { currentAdmission } = this.props
    if (currentAdmission) {
      AdmissionPeristenceService.save(currentAdmission)
      this.props.admitPatient(currentAdmission)
    }
  }

  render() {
    const {
      props: { currentAdmission },
      changeAdmissionLaw,
      changeDiagnosis,
      changeReport,
      doAdmit,
    } = this

    if (!currentAdmission) {
      return null
    }

    const {
      law,
      patient: { name },
      diagnosis,
      initReport,
    } = currentAdmission

    return (
      <Form className="Form">
        <h2>{name}</h2>
        <AdmissionDate />
        <Law value={law} onChange={changeAdmissionLaw} />
        <Diagnosis value={diagnosis} onChange={changeDiagnosis} />
        <ReportInput value={initReport} onChange={changeReport} />
        <Button onClick={doAdmit}>تسجيل دخول المريض</Button>
      </Form>
    )
  }
}

const findPatientId = (search: string) => {
  const arr = search.replace('?', '').split('=')
  const patId = arr.indexOf('patientId')

  return arr[patId + 1]
}

const mapStateToProps = (
  { admissionRequests }: State,
  { location: { search } }: RouteComponentProps,
): StateProps => {
  const patientId = findPatientId(search)
  return {
    currentAdmission: admissionRequests.find(
      ({ patient: { id } }) => id === patientId,
    ),
  }
}

const mapDispatchToProps: DispatchProps = {
  changeAdmission: admission => ({
    type: Actions.UPDATE_ADMISSION,
    payload: admission,
  }),
  admitPatient: admission => ({
    type: Actions.ADMIT_PATIENT,
    payload: admission,
  }),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartAdmission)
