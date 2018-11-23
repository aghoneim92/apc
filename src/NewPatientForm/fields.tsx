import * as React from 'react'
import { ChangeEvent } from 'react'

import { Label, FormGroup, Input } from 'reactstrap'

export type ChangeHandler = (value: string) => void

export const setValue = (onChange: ChangeHandler) => ({
  target: { value },
}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(value)

export interface FieldProps {
  value: string
  onChange(value: string): void
}

const nameCache = {}

export const field = (name: string, label: string) => ({
  value,
  onChange,
}: FieldProps) => {
  if (!nameCache[name]) {
    nameCache[name] = 1
  } else {
    nameCache[name]++
  }

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name + nameCache[name]}
        name={name}
        type="text"
        value={value}
        onChange={setValue(onChange)}
        className="InputField"
        required
      />
    </FormGroup>
  )
}

export const SSID = field('ssid', 'الرقم القومي / جواز السفر')
export const Occupation = field('occupation', 'المهنة')
export const Nationality = field('nationality', 'الجنسية')
export const LegalStatus = field(
  'legalStatus',
  'الاهلية القانونية للمطلوب دخوله',
)

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
