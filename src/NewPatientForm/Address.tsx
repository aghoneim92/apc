import * as React from 'react'

import { FieldProps, ChangeHandler } from './fields'
import { FormGroup, Label } from 'reactstrap'

const setValue = (onChange: ChangeHandler) => ({
  target: { value },
}: React.ChangeEvent<HTMLTextAreaElement>) => onChange(value)

export const Address = ({ value, onChange }: FieldProps) => (
  <FormGroup className="AddressInput">
    <Label className="AddressInput-label" for="address">
      محل الإقامة
    </Label>
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
