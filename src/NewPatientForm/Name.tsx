import * as React from 'react'

import { Label, Input } from 'reactstrap'

import { setValue } from './fields'
import Gender from '../model/Gender'

export interface NameProps {
  gender: Gender
  value: string
  onChange(value: string): void
  admittor?: boolean
}

export const Name = ({
  gender,
  value,
  onChange,
  admittor = false,
}: NameProps) => {
  const teh = gender === Gender.Female ? 'ة' : ''
  const title = `السيد${teh} `
  const placeholder = `فلان${teh} العلاني${teh}`

  return (
    <>
      <Label htmlFor="name">{`${admittor ? 'و اقر انا ' : ''}${title}`}</Label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder={placeholder}
        value={value}
        onChange={setValue(onChange)}
        required
      />
    </>
  )
}
