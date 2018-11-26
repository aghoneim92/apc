import * as React from 'react'

import Report, { AdmissionMethod } from 'src/model/Report'
import {
  StrongSymptoms,
  MentalCheck,
  DangerSigns,
  ImminentDanger,
  PatientAgrees,
  NeedsECT,
  AdmissionMethodInput,
} from './fields'
import { QuickEntryInput } from './QuickEntry'
import PeopleNotified from './PeopleNotified'
import NationalCommittee from './NationalCommittee'

const setReportField = (onChange: ChangeHandler) => (report: Report) => (
  field: string,
) => (value: any) =>
  onChange({
    ...report,
    [field]: value,
  })

type ChangeHandler = (report: Report) => void

interface ReportProps {
  value: Report
  onChange: ChangeHandler
}

const ReportInput = ({ value, onChange }: ReportProps) => {
  const setField = setReportField(onChange)(value)
  const setStrongSymptoms = setField('strongSymptoms')
  const setMentalCheck = setField('mentalCheck')
  const setDangerSigns = setField('dangerSigns')
  const setImminentDanger = setField('imminentDanger')
  const setPatientAgrees = setField('patientAgrees')
  const setNeedsECT = setField('needsECT')
  const setAdmissionMethod = setField('admissionMethod')
  const setQuickEntry = setField('quickEntry')
  const setPeopleNotified = setField('peopleNotified')
  const setNationalCommittee = setField('nationalCommittee')

  return (
    <section>
      <h3>تقرير الطبيب النفسي المسؤول</h3>
      <StrongSymptoms
        value={value.strongSymptoms}
        onChange={setStrongSymptoms}
      />
      <MentalCheck value={value.mentalCheck} onChange={setMentalCheck} />
      <DangerSigns value={value.dangerSigns} onChange={setDangerSigns} />
      <ImminentDanger
        value={value.imminentDanger}
        onChange={setImminentDanger}
      />
      <PatientAgrees value={value.patientAgrees} onChange={setPatientAgrees} />
      <NeedsECT value={value.needsECT} onChange={setNeedsECT} />
      <AdmissionMethodInput
        value={value.admissionMethod}
        onChange={setAdmissionMethod}
      />
      {value.admissionMethod === AdmissionMethod.Eighteen && (
        <QuickEntryInput value={value.quickEntry} onChange={setQuickEntry} />
      )}
      <PeopleNotified
        value={value.peopleNotified}
        onChange={setPeopleNotified}
      />
      {value.peopleNotified.nationalCommittee && (
        <NationalCommittee value={value.nationalCommittee} onChange={setNationalCommittee} />
      )}
    </section>
  )
}

export default ReportInput
