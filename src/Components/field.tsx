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

const nameCount = {}

const field = (name: string, label: string) => ({
  value,
  onChange,
}: FieldProps) => {
  if (!nameCount[name]) {
    nameCount[name] = 1
  } else {
    nameCount[name]++
  }

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name + nameCount[name]}
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

export default field
