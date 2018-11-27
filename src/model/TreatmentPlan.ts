export enum TreatmentType {
  Medicine = 0,
  Psychotherapy,
  Work,
  Sports,
  Vacations,
  Other,
}

export default interface TreatmentPlan {
  type: TreatmentType
  value: string
}
