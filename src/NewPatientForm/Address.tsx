import * as React from 'react'

import { FieldProps, ChangeHandler } from './fields'

const setValue = (onChange: ChangeHandler) => ({
  target: { value },
}: React.ChangeEvent<HTMLTextAreaElement>) => onChange(value)

export const Address = ({ value, onChange }: FieldProps) => (
  <section className="AddressInput">
    <label className="AddressInput-label" htmlFor="address">
      محل الإقامة
    </label>
    <textarea
      id="address"
      name="address"
      value={value}
      onChange={setValue(onChange)}
      className="AddressInput-input"
      rows={4}
      cols={50}
    />
  </section>
)
