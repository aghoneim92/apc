import * as React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { NationalCommittee } from 'src/model/Report'
import { ChangeEvent } from 'react';

type ChangeHandler = (value: NationalCommittee) => void

interface Props {
  value: NationalCommittee
  onChange: ChangeHandler
}

const setInformDate = (onChange: ChangeHandler) => (
  nationalCommittee: NationalCommittee,
) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
  onChange({
    ...nationalCommittee,
    informDate: value,
  })

const NationalCommitteeInput = ({ value, onChange }: Props) => (
  <FormGroup>
    <Label>تاريخ ابلاغ المجلس</Label>
    <Input
      type="text"
      value={value.informDate}
      onChange={setInformDate(onChange)(value)}
    />
  </FormGroup>
)

export default NationalCommitteeInput
