import * as React from 'react'
import { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import Button from 'reactstrap/lib/Button'
import Col from 'reactstrap/lib/Col'
import Form from 'reactstrap/lib/Form'
import FormGroup from 'reactstrap/lib/FormGroup'
import Input from 'reactstrap/lib/Input'
import Label from 'reactstrap/lib/Label'
import findPatientId from 'src/findPatientId'
import Admission from 'src/model/Admission'
import State from 'src/model/State'
import TreatmentPlan, { TreatmentType } from 'src/model/TreatmentPlan'
import Actions from 'src/actions'
import Row from 'reactstrap/lib/Row'

const typeLabels = [
  'الدوائي',
  'النفسي',
  'بالعمل',
  'بالرياضة',
  'بالأجازات',
  'اخرى',
]

interface StateProps {
  admission?: Admission
  plan: TreatmentPlan[]
  id: string
}

type AddToPlan = (
  id: string,
  plan: TreatmentPlan,
) => {
  type: Actions.ADD_TO_PLAN
  payload: {
    id: string
    plan: TreatmentPlan
  }
}

interface DispatchProps {
  addToPlan: AddToPlan
}

interface Props extends StateProps, DispatchProps {}

interface ComponentState {
  treatmentType: TreatmentType
  treatmentValue: string
}

class TreatmentPlanInput extends Component<Props, ComponentState> {
  state = {
    treatmentType: TreatmentType.Medicine,
    treatmentValue: '',
  }

  setInputValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ treatmentValue: value })
  }

  setInputType = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ treatmentType: parseInt(value, 10) })
  }

  addToPlan = () => {
    const {
      props: { id, addToPlan },
      state: { treatmentType, treatmentValue },
    } = this

    addToPlan(id, { type: treatmentType, value: treatmentValue })

    this.setState({ treatmentType: TreatmentType.Medicine, treatmentValue: '' })
  }

  render() {
    const {
      props: { plan },
      state: { treatmentType, treatmentValue },
      setInputValue,
      setInputType,
      addToPlan,
    } = this

    return (
      <Form style={{ width: '90%' }}>
        <h1>الخطة العلاجية</h1>
        <FormGroup row>
          <Label sm={2}>العلاج</Label>
          <Col sm={2}>
            <Input
              type="select"
              name="treatmentType"
              value={treatmentType}
              onChange={setInputType}
            >
              {typeLabels.map((label, index) => (
                <option key={index} value={index}>
                  {label}
                </option>
              ))}
            </Input>
          </Col>
          <Col sm={7}>
            <Input
              type="textarea"
              onChange={setInputValue}
              value={treatmentValue}
            />
          </Col>
          <Button onClick={addToPlan}>اضف</Button>
        </FormGroup>
        {plan.map(({ type: typ, value: val }, index) => (
          <Row key={index}>
            <Col sm={2}>{typeLabels[typ]}</Col>
            <Col sm={10}>{val}</Col>
          </Row>
        ))}
      </Form>
    )
  }
}

const mapStateToProps = (
  { admissions, treatmentPlans }: State,
  {
    history: {
      location: { search },
    },
  }: RouteComponentProps,
): StateProps => {
  const patientId = findPatientId(search)
  return {
    admission: admissions.find(({ patient: { id } }) => id === patientId),
    plan: treatmentPlans[patientId] || [],
    id: patientId,
  }
}

const mapDispatchToProps: DispatchProps = {
  addToPlan: (id: string, plan: TreatmentPlan) => ({
    type: Actions.ADD_TO_PLAN,
    payload: {
      id,
      plan,
    },
  }),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TreatmentPlanInput)
