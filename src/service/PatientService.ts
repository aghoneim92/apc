import Patient from '../model/Patient'
import { LocalStorageService } from './PersistenceService'

export class LocalStoragePatientService extends LocalStorageService<
  Patient
> {
  key = 'patients'
}
