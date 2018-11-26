import * as React from 'react'
import { FormGroup, Label } from 'reactstrap'
import { setValue } from 'src/Components/field'

export interface TextareaProps {
  value: string
  onChange(val: string): void
}

interface TextareaConfig {
  name: string
  label: string
  rows?: number
  cols?: number
}

export const textarea = ({
  name,
  label,
  rows = 4,
  cols = 50,
}: TextareaConfig) => ({ value, onChange }: TextareaProps) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      cols={cols}
      value={value}
      onChange={setValue(onChange)}
    />
  </FormGroup>
)
