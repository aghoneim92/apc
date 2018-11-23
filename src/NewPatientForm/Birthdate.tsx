import * as React from 'react'
import { ChangeEvent } from 'react'

import { Label, Input } from 'reactstrap'
import { format, subYears } from 'date-fns'

const MIN_AGE = 12
const MIN_BIRTHDATE = '1900-01-01'
const MAX_BIRTHDATE = format(subYears(new Date(), MIN_AGE), 'yyyy-mm-dd')

export interface BirthdateProps {
  birthdate: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

export const Birthdate = ({ birthdate, onChange }: BirthdateProps) => (
  <section>
    <Label htmlFor="birthdate">تاريخ الميلاد</Label>
    {/* <DatePicker selected={birthdate} onChange={setBirthdate} /> */}
    <Input
      id="birthdate"
      type="date"
      value={birthdate}
      onChange={onChange}
      min={MIN_BIRTHDATE}
      max={MAX_BIRTHDATE}
    />
  </section>
)
