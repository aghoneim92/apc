export enum AdmissionMethod {
  Normal = 0,
  Seventeen,
  Eighteen,
}

export interface PersonInvolved {
  name: string
  relation: string
}

export interface QuickEntry {
  reasons: string
  peopleInvolved: PersonInvolved[]
}

export interface PeopleNotified {
  family: boolean
  hospitalManager: boolean
  socialServicesOffice: boolean
  nationalCommittee: boolean
}

export interface NationalCommittee {
  informDate: string
  id: string
}

export default interface Report {
  strongSymptoms: string
  mentalCheck: string
  dangerSigns: string
  imminentDanger: string
  patientAgrees: boolean
  needsECT: boolean
  admissionMethod: AdmissionMethod
  quickEntry: QuickEntry
  peopleNotified: PeopleNotified
  nationalCommittee: NationalCommittee
}
