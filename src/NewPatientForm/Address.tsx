import * as React from 'react'

import { FieldProps, ChangeHandler } from 'src/Components/field'
import { FormGroup, Label } from 'reactstrap'

const setValue = (onChange: ChangeHandler) => ({
  target: { value },
}: React.ChangeEvent<HTMLTextAreaElement>) => onChange(value)

export const Address = ({ value, onChange }: FieldProps) => (
  <FormGroup>
    <Label for="address">محل الإقامة</Label>
    <textarea
      id="address"
      name="address"
      value={value}
      rows={3}
      cols={50}
      onChange={setValue(onChange)}
      required
    />
  </FormGroup>
)
