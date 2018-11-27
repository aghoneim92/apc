import * as React from 'react'
import { Component } from 'react'
import { Form, Button } from 'reactstrap'

import Admission from 'src/model/Admission'
import Law from './AdmissionLaw'
import { connect } from 'react-redux'
import State from 'src/model/State'
import Actions from 'src/actions'
import { RouteComponentProps } from 'react-router'
import Diagnosis from './Diagnosis'
import ReportInput from './ReportInput'
import AdmissionPeristenceService from 'src/service/AdmissionPersistenceService'
import { DoctorName } from './fields'
import findPatientId from 'src/findPatientId';

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
  changeField = (field: string) => (value: any) => {
    const { changeAdmission, currentAdmission } = this.props

    if (currentAdmission) {
      changeAdmission({
        ...currentAdmission,
        [field]: value,
      })
    }
  }

  changeAdmissionLaw = this.changeField('law')
  changeDiagnosis = this.changeField('diagnosis')
  changeReport = this.changeField('initReport')
  changeDoctorName = this.changeField('doctorName')

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
      changeDoctorName,
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
      doctorName,
    } = currentAdmission

    return (
      <Form className="Form">
        <h2>{name}</h2>
        <AdmissionDate />
        <Law value={law} onChange={changeAdmissionLaw} />
        <DoctorName value={doctorName} onChange={changeDoctorName} />
        <Diagnosis value={diagnosis} onChange={changeDiagnosis} />
        <ReportInput value={initReport} onChange={changeReport} />
        <Button onClick={doAdmit}>تسجيل دخول المريض</Button>
      </Form>
    )
  }
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
