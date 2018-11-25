import Admission from './Admission'

export default interface State {
  currentAdmission?: Admission
  admissionRequests: Admission[]
}
