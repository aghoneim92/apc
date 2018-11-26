import * as React from 'react'

import { Label, Input, FormGroup, Col } from 'reactstrap'

import Gender from '../model/Gender'
import { setValue } from 'src/Components/field'

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
    <FormGroup row>
      <Label className="Label" for="name" sm={admittor ? 3 : 2}>{`${
        admittor ? 'و اقر انا ' : ''
      }${title}`}</Label>
      <Col sm={admittor ? 9 : 10}>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder={placeholder}
          value={value}
          onChange={setValue(onChange)}
          required
        />
      </Col>
    </FormGroup>
  )
}
