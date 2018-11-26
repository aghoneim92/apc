import * as React from 'react'

import { Label, FormGroup } from 'reactstrap'
import field, { FieldProps, setValue } from 'src/Components/field'

export const SSID = field('ssid', 'الرقم القومي / جواز السفر')
export const Occupation = field('occupation', 'المهنة')
export const Nationality = field('nationality', 'الجنسية')
export const LegalStatus = field(
  'legalStatus',
  'الاهلية القانونية للمطلوب دخوله',
)
export const PhoneNumber = field('phoneNumber', 'رقم التليفون')

export const AdmissionReasons = ({ value, onChange }: FieldProps) => (
  <FormGroup>
    <Label for="admissionReasons">
      وذلك للعلاج بالمنشأة لديكم للأسباب المبينة ادناه
    </Label>
    <textarea
      id="admissionReasons"
      name="admissionReasons"
      value={value}
      rows={5}
      cols={50}
      onChange={setValue(onChange)}
      required
    />
  </FormGroup>
)
