import Patient from './Patient'
import AdmissionLaw from './AdmissionLaw'

export default interface Admission {
  patient: Patient
  law: AdmissionLaw
}
