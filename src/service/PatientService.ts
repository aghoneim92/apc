import Patient from '../model/Patient'
import { LocalStorageCRUDService } from './CRUDService'

export class LocalStoragePatientService extends LocalStorageCRUDService<
  Patient
> {
  key = 'patients'
}
