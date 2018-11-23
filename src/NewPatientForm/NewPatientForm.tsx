import * as React from 'react'
import { Component } from 'react'

import { Form, FormGroup } from 'reactstrap'

import { Gender, GenderInput } from './Gender'
import { Birthdate } from './Birthdate'
import { Name } from './Name'
import { SSID, Occupation, Nationality } from './fields'
import { MaritalStatus, MaritalStatusInput } from './MaritalStatus'
import { Address } from './Address'
import { Priors } from './Priors'

import './NewPatientForm.css'

interface Patient {
  name: string
  gender: Gender
  birthdate: string
  ssid: string
  occupation: string
  nationality: string
  maritalStatus: MaritalStatus
  address: string
  priorIllness: boolean
  priorHospitalized: boolean
}

interface State {
  patient: Patient
}

const Intro = () => <p>السيد الدكتور مدير المنشأة، برجاء قبول طلبي لإدخال</p>

export default class NewPatientForm extends Component<{}, State> {
  state = {
    patient: {
      name: '',
      birthdate: '1992-01-01',
      gender: Gender.Male,
      ssid: '',
      occupation: '',
      nationality: '',
      maritalStatus: MaritalStatus.Single,
      address: '',
      priorIllness: false,
      priorHospitalized: false,
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
        },
      },
    } = this

    return (
      <Form className="NewPatientForm">
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
      </Form>
    )
  }
}
