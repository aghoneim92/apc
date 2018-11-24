import { Gender } from './Gender'
import { MaritalStatus } from './MaritalStatus'
import { Admittor } from './Admittor'

export interface Patient {
  id: string
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
  numHospitalized: number
  legalStatus: string
  admissionReasons: string
  admittor: 'self' | Admittor
}
