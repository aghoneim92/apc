import Admission from './Admission'
import TreatmentPlan from './TreatmentPlan';

export default interface State {
  admissionRequests: Admission[]
  admissions: Admission[]
  treatmentPlans: {
    [id: string]: TreatmentPlan[]
  }
}
