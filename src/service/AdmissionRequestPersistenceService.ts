import { LocalStorageService } from './PersistenceService'
import Admission from 'src/model/Admission'

class AdmissionRequestPersistenceService extends LocalStorageService<
  Admission
> {
  key = 'admissionRequests'
}

export default new AdmissionRequestPersistenceService()
