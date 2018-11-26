import Admission from 'src/model/Admission'
import { LocalStorageService } from './PersistenceService'

class AdmissionPeristenceService extends LocalStorageService<Admission> {
  key = 'admissions'
}

export default new AdmissionPeristenceService()
