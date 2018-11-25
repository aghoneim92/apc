import * as React from 'react'
import { Component } from 'react'
import { Form } from 'reactstrap'

import Admission from 'src/model/Admission'
import AdmissionLaw from 'src/model/AdmissionLaw'
import Law from './AdmissionLaw'
import { connect } from 'react-redux'
import State from 'src/model/State'
import Actions from 'src/actions'
import { RouteComponentProps } from 'react-router'

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

  render() {
    const {
      props: { currentAdmission },
      changeAdmissionLaw,
    } = this

    if (!currentAdmission) {
      return null
    }

    const {
      law,
      patient: { name },
    } = currentAdmission

    return (
      <Form>
        {name}
        <AdmissionDate />
        <Law value={law} onChange={changeAdmissionLaw} />
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartAdmission)
