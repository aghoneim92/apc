import * as React from 'react'

import DatePicker from 'react-date-picker'

// import 'react-datepicker/dist/react-datepicker.css'

import { Label } from 'reactstrap'
import { parse, subYears } from 'date-fns'
import { OnChangeDateCallback } from 'react-calendar'
// import { format, subYears } from 'date-fns'

const MIN_AGE = 12
const MIN_BIRTHDATE = parse('1900-01-01', 'yyyy-M-dd', new Date())
const MAX_BIRTHDATE = subYears(new Date(), MIN_AGE)

export interface BirthdateProps {
  birthdate: Date
  onChange: OnChangeDateCallback
}

export const Birthdate = ({ birthdate, onChange }: BirthdateProps) => (
  <section>
    <Label htmlFor="birthdate">تاريخ الميلاد</Label>
    <div id="birthdate">
      <DatePicker
        value={birthdate}
        onChange={onChange}
        minDate={MIN_BIRTHDATE}
        maxDate={MAX_BIRTHDATE}
      />
    </div>
    {/* <Input
      id="birthdate"
      type="date"
      value={birthdate}
      onChange={onChange}
      min={MIN_BIRTHDATE}
      max={MAX_BIRTHDATE}
    /> */}
  </section>
)
