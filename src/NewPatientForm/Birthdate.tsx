import * as React from 'react'
import { Input, Label, Col } from 'reactstrap'
import FormGroup from 'reactstrap/lib/FormGroup'
import { setValue } from 'src/Components/field'

export interface BirthdateProps {
  birthdate: string
  onChange(value: string): void
}

export const Birthdate = ({ birthdate, onChange }: BirthdateProps) => (
  <FormGroup row>
    <Label sm={2} htmlFor="birthdate">
      تاريخ الميلاد
    </Label>
    <Col sm={10}>
      <Input
        id="birthdate"
        type="text"
        value={birthdate}
        onChange={setValue(onChange)}
      />
    </Col>
  </FormGroup>
)
