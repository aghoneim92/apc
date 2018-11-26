import * as React from 'react'

import { FormGroup, Label, Input } from 'reactstrap'

type ChangeHandler = (value: boolean) => void

export interface CheckboxProps {
  value: boolean
  onChange: ChangeHandler
}

const setBooleanValue = (onChange: ChangeHandler) => (
  currentValue: boolean,
) => () => onChange(!currentValue)

export const checkbox = (name: string) => (label: string) => ({
  value,
  onChange,
}: CheckboxProps) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      id={name}
      name={name}
      type="checkbox"
      checked={value}
      onChange={setBooleanValue(onChange)(value)}
    />
  </FormGroup>
)
