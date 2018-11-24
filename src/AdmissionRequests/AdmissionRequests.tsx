import * as React from 'react'

import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

import Admission from 'src/model/Admission'

type StartHandler = (admission: Admission) => void

interface Props {
  requests: Admission[]
  startAdmission: StartHandler
}

const createStart = (startAdmission: StartHandler) => (
  admission: Admission,
) => () => startAdmission(admission)

const AdmissionRequests = ({ requests, startAdmission }: Props) => {
  const start = createStart(startAdmission)
  return (
    <section>
      {requests.map(request => {
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

export default AdmissionRequests
