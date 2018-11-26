import * as React from 'react'
import { PersonInvolved } from 'src/model/Report'
import { FormGroup, Label, Input } from 'reactstrap'
import { ChangeEvent } from 'react'

type ChangeHandler = (index: number) => (value: PersonInvolved) => void

interface PeopleInvolvedProps {
  value: PersonInvolved[]
  onChange: ChangeHandler
}

const changePersonName = (index: number) => (onChange: ChangeHandler) => (
  personInvolved: PersonInvolved,
) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
  onChange(index)({ ...personInvolved, name: value })

const changePersonRelation = (index: number) => (onChange: ChangeHandler) => (
  personInvolved: PersonInvolved,
) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
  onChange(index)({ ...personInvolved, relation: value })

const PeopleInvolved = ({ value, onChange }: PeopleInvolvedProps) => {
  return (
    <FormGroup>
      <legend>اسماء القائمين بالنقل و صفتهم</legend>
      {value.map((person, index) => (
        <FormGroup>
          <Label>{(index + 1).toLocaleString('ar-EG')}</Label>
          <Input
            type="text"
            value={person.name}
            onChange={changePersonName(index)(onChange)(person)}
          />
          <Label for={`relation${index}`}>الصفة</Label>
          <Input
            id={`relation${index}`}
            type="text"
            value={person.relation}
            onChange={changePersonRelation(index)(onChange)(person)}
          />
        </FormGroup>
      ))}
    </FormGroup>
  )
}

export default PeopleInvolved
