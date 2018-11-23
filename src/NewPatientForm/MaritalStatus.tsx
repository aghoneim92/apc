import * as React from 'react'

import { FormGroup, Label, Input } from 'reactstrap'

import { Gender } from './Gender'

export enum MaritalStatus {
  Single = 0,
  Married,
  Divorced,
  Widowed,
}

const labels = [
  ['اعزب', 'عزباء'],
  ['متزوج', 'متزوجة'],
  ['مطلق', 'مطلقة'],
  ['ارمل', 'ارملة'],
]

type ChangeHandler = (value: MaritalStatus) => void

interface MaritalStatusProps {
  gender: Gender
  value: MaritalStatus
  onChange: ChangeHandler
}

const setValue = (value: MaritalStatus) => (onChange: ChangeHandler) => () =>
  onChange(value)

export const MaritalStatusInput = ({
  gender,
  value,
  onChange,
}: MaritalStatusProps) => (
  <FormGroup>
    <legend>الحالة الإجتماعية</legend>
    {labels.map(([maleLabel, femaleLabel], index) => (
      <FormGroup key={index} check inline>
        <Label check for={maleLabel}>
          {gender === Gender.Male ? maleLabel : femaleLabel}
          <Input
            type="radio"
            id={maleLabel}
            name={maleLabel}
            checked={value === index}
            onChange={setValue(index)(onChange)}
          />
        </Label>
      </FormGroup>
    ))}
  </FormGroup>
)
