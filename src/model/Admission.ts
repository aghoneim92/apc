import Patient from './Patient'
import AdmissionLaw from './AdmissionLaw'
import Report from './Report';

export default interface Admission {
  patient: Patient
  law: AdmissionLaw
  diagnosis: string
  initReport: Report
  doctorName: string
}
