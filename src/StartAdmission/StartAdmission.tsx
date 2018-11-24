import * as React from 'react'
import { Component } from 'react'
import { Form } from 'reactstrap'

import Admission from 'src/model/Admission'
import AdmissionLaw from 'src/model/AdmissionLaw'
import Law from './AdmissionLaw'

const AdmissionDate = () => (
  <div>تاريخ الدخول : {new Date().toLocaleDateString('ar-EG')}</div>
)

interface Props {
  admission: Admission
  changeAdmission(admission: Admission): void
}

export default class StartAdmission extends Component<Props> {
  changeAdmissionLaw = (law: AdmissionLaw) => {
    const { changeAdmission, admission } = this.props

    changeAdmission({
      ...admission,
      law,
    })
  }

  render() {
    const {
      props: {
        admission: {
          patient: { name },
          law,
        },
      },
      changeAdmissionLaw,
    } = this

    return (
      <Form>
        {name}
        <AdmissionDate />
        <Law value={law} onChange={changeAdmissionLaw} />
      </Form>
    )
  }
}
