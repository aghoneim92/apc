import * as React from 'react'
import { connect } from 'react-redux'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardText from 'reactstrap/lib/CardText'
import CardTitle from 'reactstrap/lib/CardTitle'
import Admission from 'src/model/Admission'
import State from 'src/model/State'

interface StateProps {
  admissions: Admission[]
}

const AllPatients = ({ admissions }: StateProps) => (
  <section>
    {admissions.map(
      ({ patient: { id, name, dateOfEntry, address }, law, doctorName }) => (
        <Card key={id}>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>رقم القيد : {id}</CardText>
            <CardText>رقم الغرفة: ٥ تاريخ الدخول : {dateOfEntry}</CardText>
            <CardText>العنوان : {address}</CardText>
            <CardText>مادة الدخول : {law.toLocaleString('ar-EG')}</CardText>
            <CardText>تليفون</CardText>
            <CardText>الاستشاري : {doctorName}</CardText>
          </CardBody>
        </Card>
      ),
    )}
  </section>
)

const mapStateToProps = ({ admissions }: State): StateProps => ({ admissions })

export default connect(mapStateToProps)(AllPatients)
