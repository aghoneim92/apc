import * as React from 'react'
import { ChangeEvent } from 'react'

import { FormGroup, Input, Label } from 'reactstrap'

import AdmissionLaw from '../model/AdmissionLaw'
import { memoize } from '../memoize'

interface Props {
  value: AdmissionLaw
  onChange(law: AdmissionLaw): void
}

const createOnChange = memoize(
  (onChange: (law: AdmissionLaw) => void) => (arg: AdmissionLaw) => ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      onChange(arg)
    }
  },
)

const Law = ({ value, onChange }: Props) => (
  <FormGroup>
    <legend>مادة الدخول</legend>
    <FormGroup inline check>
      <Label check>
        مادة ١٠
        <Input
          type="radio"
          checked={value === 10}
          onChange={createOnChange(onChange)(AdmissionLaw.Ten)}
        />
      </Label>
    </FormGroup>
    <FormGroup inline check>
      <Label check>
        مادة ١٢
        <Input
          type="radio"
          checked={value === 12}
          onChange={createOnChange(onChange)(AdmissionLaw.Twelve)}
        />
      </Label>
    </FormGroup>
    <FormGroup inline check>
      <Label check>
        مادة ١٣
        <Input
          type="radio"
          checked={value === 13}
          onChange={createOnChange(onChange)(AdmissionLaw.Thirteen)}
        />
      </Label>
    </FormGroup>
  </FormGroup>
)

export default Law
