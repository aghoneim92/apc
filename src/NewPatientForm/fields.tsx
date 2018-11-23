import * as React from 'react'
import { ChangeEvent } from 'react'

import { Label, FormGroup, Input } from 'reactstrap'

export type ChangeHandler = (value: string) => void

export const setValue = (onChange: ChangeHandler) => ({
  target: { value },
}: ChangeEvent<HTMLInputElement>) => onChange(value)

export interface FieldProps {
  value: string
  onChange(value: string): void
}

export const field = (name: string, label: string) => ({
  value,
  onChange,
}: FieldProps) => (
  <FormGroup>
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      name={name}
      type="text"
      value={value}
      onChange={setValue(onChange)}
      className="InputField"
    />
  </FormGroup>
)

export const SSID = field('ssid', 'الرقم القومي / جواز السفر')
export const Occupation = field('occupation', 'المهنة')
export const Nationality = field('nationality', 'الجنسية')
