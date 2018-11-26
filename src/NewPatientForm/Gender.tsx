import * as React from 'react'

import { Label, Input, FormGroup, Col } from 'reactstrap'

import { memoize } from '../memoize'
import Gender from 'src/model/Gender'

export interface GenderProps {
  gender: Gender
  onChange(gender: Gender): void
}

const createOnChange = memoize(
  (onChange: (gender: Gender) => void) => (arg: Gender) => () => onChange(arg),
)

export const GenderInput = ({ gender, onChange }: GenderProps) => (
  <FormGroup row>
    <Col sm={2}>
      <legend>الجنس</legend>
    </Col>
    <Col sm={10}>
      <FormGroup row check inline>
        <Label check for="male">
          ذكر
          <Input
            id="male"
            name="gender"
            type="radio"
            checked={gender === Gender.Male}
            onChange={createOnChange(onChange)(Gender.Male)}
          />
        </Label>
      </FormGroup>
      <FormGroup check inline style={{ marginInlineStart: '1em' }}>
        <Label check for="female">
          انثى
          <Input
            id="female"
            name="gender"
            type="radio"
            checked={gender === Gender.Female}
            onChange={createOnChange(onChange)(Gender.Female)}
          />
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
)
