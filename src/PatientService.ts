import { Patient } from './NewPatientForm/Patient'

export interface PatientService {
  save(patient: Patient): void
  loadAll(): Patient[]
}

const KEY = 'patients'

export class LocalStoragePatientService implements PatientService {
  save(patient: Patient) {
    const patients = this.loadAll()
    localStorage.setItem(KEY, JSON.stringify(patients.concat(patient)))
  }

  loadAll() {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  }
}
