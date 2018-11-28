import * as React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

import { checkbox } from 'src/Components/checkbox'
import { textarea } from 'src/Components/textarea'
import { AdmissionMethod } from 'src/model/Report'
import field from 'src/Components/field'

export const StrongSymptoms = textarea({
  name: 'strongSymptoms',
  label: 'اعراض المرض النفسي الشديد',
  rows: 2,
})
export const MentalCheck = textarea({
  name: 'mentalCheck',
  label: 'الفحص العقلي',
  rows: 2,
})
export const DangerSigns = textarea({
  name: 'dangerSigns',
  label: 'اوجه الخطورة',
  rows: 2,
})
export const ImminentDanger = textarea({
  name: 'imminentDanger',
  label: 'التقييم للتدهور الحاد الوشيك',
  rows: 2,
})

export const PatientAgrees = checkbox('patientAgrees')(
  'قبول المريض الدخول من عدمه',
)
export const NeedsECT = checkbox('needsECT')('يحتاج المريض للعلاج الكهربائي')

export const DoctorName = field('doctorName', 'اسم الطبيب المعالج', 3)

const labels = ['بالطرق العادية', 'مادة ١٧', 'مادة ١٨']

type ChangeHandler = (value: AdmissionMethod) => void

interface Props {
  value: AdmissionMethod
  onChange: ChangeHandler
}

const setValue = (onChange: ChangeHandler) => (value: AdmissionMethod) => () =>
  onChange(value)

export const AdmissionMethodInput = ({ value, onChange }: Props) => (
  <FormGroup>
    <legend>نقل المريض الى المستشفى</legend>
    {labels.map((label, index) => (
      <FormGroup key={index} inline check>
        <Label for={label} check>
          {label}{' '}
          <Input
            type="radio"
            id={label}
            name="admissionMethod"
            checked={value === index}
            onChange={setValue(onChange)(index)}
          />
        </Label>
      </FormGroup>
    ))}
  </FormGroup>
)
