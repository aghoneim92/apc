import * as React from 'react'
import { Component, FormEvent } from 'react'

import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'

import { Gender, GenderInput } from './Gender'
import { Birthdate } from './Birthdate'
import { Name } from './Name'
import {
  SSID,
  Occupation,
  Nationality,
  setValue,
  LegalStatus,
  AdmissionReasons,
} from './fields'
import { MaritalStatus, MaritalStatusInput } from './MaritalStatus'
import { Address } from './Address'
import { Priors } from './Priors'
import { Patient } from './Patient'
import { AdmittorInput } from './Admittor'

import './NewPatientForm.css'
import Header from './Header'

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

interface Props {
  addPatient(patient: Patient): void
}

export default class NewPatientForm extends Component<Props, State> {
  state = {
    patient: {
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
      admittor: {
        name: '',
        relation: '',
        occupation: '',
        ssid: '',
        nationality: '',
        address: '',
      },
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

  addPatient = (e: FormEvent) => {
    e.preventDefault()

    this.props.addPatient(this.state.patient)
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
        },
      },
    } = this

    const today = new Date().toLocaleDateString('ar-EG')

    return (
      <Container>
        <Header />
        <Container className="NewPatient">
          <Form className="NewPatientForm" onSubmit={addPatient}>
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
            <br />
            <br />
            <h3 style={{ textAlign: 'center' }}>
              وتفضلوا بقبول فائق الإحترام،،،
            </h3>
            <div className="ActionRow">
              <Button color="primary" size="lg" type="submit">
                حفظ
              </Button>
            </div>
            <br />
            <br />
            <br />
            <div className="Footer">
              <span className="Signature">توقيع طالب الدخول</span>
              <span className="TodaysDate">التاريخ: {today}</span>
            </div>
          </Form>
        </Container>
      </Container>
    )
  }
}
