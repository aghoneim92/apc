import * as React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'

import Actions from 'src/actions'
import Admission from 'src/model/Admission'
import { RouteComponentProps } from 'react-router'
import { History } from 'history'

type StartHandler = (admission: Admission) => void

interface Props extends RouteComponentProps {
  admissionRequests: Admission[]
  startAdmission: StartHandler
}

const createStart = (startAdmission: StartHandler) => (history: History) => (
  admission: Admission,
) => () => {
  history.push(`/startAdmission?patientId=${admission.patient.id}`)
}

const AdmissionRequests = ({
  admissionRequests,
  startAdmission,
  history,
}: Props) => {
  const start = createStart(startAdmission)(history)
  return (
    <section>
      {admissionRequests.map(request => {
        const {
          patient: { id, name, address },
        } = request

        return (
          <Card key={id}>
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardText>رقم القيد: {id}</CardText>
              <CardText>العنوان: {address}</CardText>
              <Button onClick={start(request)}>ادخال</Button>
            </CardBody>
          </Card>
        )
      })}
    </section>
  )
}

interface State {
  admissionRequests: Admission[]
}

const mapStateToProps = ({ admissionRequests }: State) => ({
  admissionRequests,
})
const mapDispatchToProps = {
  startAdmission: (admission: Admission) => ({
    type: Actions.START_ADMISSION,
    payload: admission,
  }),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdmissionRequests)
