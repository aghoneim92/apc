import * as React from 'react'
import { connect } from 'react-redux'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardText from 'reactstrap/lib/CardText'
import CardTitle from 'reactstrap/lib/CardTitle'
import Admission from 'src/model/Admission'
import State from 'src/model/State'
import Button from 'reactstrap/lib/Button'
import { RouteComponentProps } from 'react-router'
import { History } from 'history'

interface StateProps {
  admissions: Admission[]
}

interface Props extends StateProps, RouteComponentProps {}

const showTreatmentPlan = (history: History) => (id: string) => () => {
  history.push(`/treatmentPlan?patientId=${id}`)
}

const AllPatients = ({ admissions, history }: Props) => {
  const showPlan = showTreatmentPlan(history)
  return (
    <section>
      {admissions.map(
        ({
          patient: { id, name, dateOfEntry, address, phone },
          law,
          doctorName,
        }) => (
          <Card key={id}>
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardText>رقم القيد : {id}</CardText>
              <CardText>رقم الغرفة: ٥ تاريخ الدخول : {dateOfEntry}</CardText>
              <CardText>العنوان : {address}</CardText>
              <CardText>مادة الدخول : {law.toLocaleString('ar-EG')}</CardText>
              <CardText>تليفون : {phone}</CardText>
              <CardText>الاستشاري : {doctorName}</CardText>
              <Button onClick={showPlan(id)}>الخطة العلاجية</Button>
            </CardBody>
          </Card>
        ),
      )}
    </section>
  )
}

const mapStateToProps = ({ admissions }: State): StateProps => ({ admissions })

export default connect(mapStateToProps)(AllPatients)
