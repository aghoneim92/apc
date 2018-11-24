import Patient from '../model/Patient'
import { LocalStorageCRUDService } from './CRUDService'

export class LocalStorageAdmissionRequestService extends LocalStorageCRUDService<
  Patient
> {
  key = 'admissionRequests'
}
