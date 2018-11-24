import Gender from './Gender'
import MaritalStatus from './MaritalStatus'
import Admittor from './Admittor'
import Contact from './Contact'

export default interface Patient extends Contact {
  id: string
  gender: Gender
  birthdate: string
  maritalStatus: MaritalStatus
  priorIllness: boolean
  priorHospitalized: boolean
  numHospitalized: number
  legalStatus: string
  admissionReasons: string
  admittor: 'self' | Admittor
  dateOfEntry: string
}
