import * as React from 'react'
import { Component, FormEvent } from 'react'

import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'

import { GenderInput } from './Gender'
import { Birthdate } from './Birthdate'
import { Name } from './Name'
import {
  SSID,
  Occupation,
  Nationality,
  LegalStatus,
  AdmissionReasons,
  PhoneNumber,
} from './fields'
import { MaritalStatusInput } from './MaritalStatus'
import { Address } from './Address'
import { Priors } from './Priors'
import Patient from '../model/Patient'
import { AdmittorInput } from './Admittor'

import './NewPatientForm.css'
import Header from './Header'
import Gender from 'src/model/Gender'
import MaritalStatus from 'src/model/MaritalStatus'
import Actions from 'src/actions'
import Admission from 'src/model/Admission'
import AdmissionLaw from 'src/model/AdmissionLaw'
import AdmissionRequestPersistenceService from 'src/service/AdmissionRequestPersistenceService'
import { setValue } from 'src/Components/field'
import { AdmissionMethod, PersonInvolved } from 'src/model/Report'
import range from 'ramda/es/range'

interface State {
  patient: Patient
}

const Intro = () => <p>السيد الدكتور مدير المنشأة، برجاء قبول طلبي لإدخال</p>

const NumHospitalized = ({
  value,
  onChange,
}: {
  value: number
  onChange: (value: string) => void
}) => (
  <FormGroup>
    <Label>عدد مرات الدخول</Label>
    <Input type="number" value={value} onChange={setValue(onChange)} required />
  </FormGroup>
)

interface DispatchProps {
  newAdmissionRequest(
    admission: Admission,
  ): {
    type: string
    payload: Admission
  }
}
const genId = (length: number = 6) =>
  Math.floor(Math.random() * Math.pow(10, length)).toLocaleString('ar-EG', {
    useGrouping: false,
  })

const threeEmptyPeople: PersonInvolved[] = range(0, 3).map(() => ({
  name: '',
  relation: '',
}))

const createAdmission = (patient: Patient): Admission => ({
  patient,
  law: AdmissionLaw.Ten,
  diagnosis: '',
  doctorName: '',
  initReport: {
    strongSymptoms: '',
    mentalCheck: '',
    dangerSigns: '',
    imminentDanger: '',
    patientAgrees: true,
    needsECT: false,
    admissionMethod: AdmissionMethod.Normal,
    peopleNotified: {
      family: false,
      hospitalManager: false,
      socialServicesOffice: false,
      nationalCommittee: false,
    },
    quickEntry: {
      reasons: '',
      peopleInvolved: threeEmptyPeople,
    },
    nationalCommittee: {
      informDate: new Date().toLocaleDateString('ar-EG'),
      id: '',
    },
  },
})

class NewPatientForm extends Component<DispatchProps, State> {
  state = {
    patient: {
      id: genId(),
      name: '',
      birthdate: '٠١/٠١/١٩٩٢',
      gender: Gender.Male,
      ssid: '',
      occupation: '',
      nationality: '',
      maritalStatus: MaritalStatus.Single,
      address: '',
      priorIllness: false,
      priorHospitalized: false,
      numHospitalized: 1,
      legalStatus: '',
      admissionReasons: '',
      phone: '',
      admittor: {
        phone: '',
        name: '',
        relation: '',
        occupation: '',
        ssid: '',
        nationality: '',
        address: '',
      },
      dateOfEntry: new Date().toLocaleDateString('ar-EG'),
    },
  }

  setField = (field: string) => (value: any) =>
    this.setState(({ patient }: State) => ({
      patient: {
        ...patient,
        [field]: value,
      },
    }))

  setName = this.setField('name')
  setGender = this.setField('gender')
  setBirthdate = this.setField('birthdate')
  setSSID = this.setField('ssid')
  setOccupation = this.setField('occupation')
  setNationality = this.setField('nationality')
  setMaritalStatus = this.setField('maritalStatus')
  setAddress = this.setField('address')
  setPriorIllness = this.setField('priorIllness')
  setPriorHospitalized = this.setField('priorHospitalized')
  setNumHospitalized = this.setField('numHospitalized')
  setLegalStatus = this.setField('legalStatus')
  setAdmissionReasons = this.setField('admissionReasons')
  setAdmittor = this.setField('admittor')
  setPhone = this.setField('phone')

  addPatient = (e: FormEvent) => {
    e.preventDefault()

    const { patient } = this.state
    const admission = createAdmission(patient)

    this.props.newAdmissionRequest(admission)
    AdmissionRequestPersistenceService.save(admission)

    print()
  }

  render() {
    const {
      setGender,
      setBirthdate,
      setSSID,
      setName,
      setOccupation,
      setNationality,
      setMaritalStatus,
      setAddress,
      setPriorIllness,
      setPriorHospitalized,
      setNumHospitalized,
      setLegalStatus,
      setAdmissionReasons,
      setAdmittor,
      setPhone,
      addPatient,
      state: {
        patient: {
          name,
          gender,
          birthdate,
          ssid,
          occupation,
          nationality,
          maritalStatus,
          address,
          priorIllness,
          priorHospitalized,
          numHospitalized,
          legalStatus,
          admissionReasons,
          admittor,
          phone,
        },
      },
    } = this

    const today = new Date().toLocaleDateString('ar-EG')

    return (
      <Container>
        <Header />
        <Container className="NewPatient">
          <Form className="Form" onSubmit={addPatient}>
            <Intro />
            <FormGroup>
              <Name gender={gender} value={name} onChange={setName} />
              <GenderInput gender={gender} onChange={setGender} />
            </FormGroup>
            <Birthdate birthdate={birthdate} onChange={setBirthdate} />
            <SSID value={ssid} onChange={setSSID} />
            <Occupation value={occupation} onChange={setOccupation} />
            <Nationality value={nationality} onChange={setNationality} />
            <MaritalStatusInput
              gender={gender}
              value={maritalStatus}
              onChange={setMaritalStatus}
            />
            <Address value={address} onChange={setAddress} />
            <PhoneNumber value={phone} onChange={setPhone} />
            <Priors
              illness={priorIllness}
              hospital={priorHospitalized}
              setIllness={setPriorIllness}
              setHospital={setPriorHospitalized}
            />
            {priorHospitalized && (
              <NumHospitalized
                value={numHospitalized}
                onChange={setNumHospitalized}
              />
            )}
            <LegalStatus value={legalStatus} onChange={setLegalStatus} />
            <AdmissionReasons
              value={admissionReasons}
              onChange={setAdmissionReasons}
            />
            <AdmittorInput value={admittor} onChange={setAdmittor} />
            بصحة البيانات المحررة اعلاه بمعرفتي و تحت مسؤوليتي.
            <div className="Footer">
              <br />
              <br />
              <h3 style={{ textAlign: 'center' }}>
                وتفضلوا بقبول فائق الإحترام،،،
              </h3>
              <br />
              <br />
              <br />
              <span className="Signature">توقيع طالب الدخول</span>
              <span className="TodaysDate">التاريخ: {today}</span>
            </div>
            <div className="ActionRow">
              <Button
                className="noprint"
                color="primary"
                size="lg"
                type="submit"
              >
                حفظ و طباعة
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
    )
  }
}

const mapDispatchToProps: DispatchProps = {
  newAdmissionRequest: (admission: Admission) => ({
    type: Actions.NEW_ADMISSION_REQUEST,
    payload: admission,
  }),
}

export default connect(
  null,
  mapDispatchToProps,
)(NewPatientForm)
