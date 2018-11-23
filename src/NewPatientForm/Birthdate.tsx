import * as React from 'react'

import { Label, Input } from 'reactstrap'
import { setValue } from './fields'

export interface BirthdateProps {
  birthdate: string
  onChange(value: string): void
}

export const Birthdate = ({ birthdate, onChange }: BirthdateProps) => (
  <section>
    <Label htmlFor="birthdate">تاريخ الميلاد</Label>
    <Input
      id="birthdate"
      type="text"
      value={birthdate}
      onChange={setValue(onChange)}
    />
  </section>
)
