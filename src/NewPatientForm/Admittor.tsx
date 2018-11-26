import * as React from 'react'
import { FormGroup } from 'reactstrap'
import Gender from '../model/Gender'
import { Name } from './Name'
import { Occupation, SSID, Nationality } from './fields'
import { Address } from './Address'
import Admittor from 'src/model/Admittor'
import field from 'src/Components/field';

type ChangeHandler = (value: Admittor) => void

const setField = (onChange: ChangeHandler) => (admittor: Admittor) => (
  fieldName: string,
) => (value: string) =>
  onChange({
    ...admittor,
    [fieldName]: value,
  })

const Relation = field('relation', 'الصفة')

export const AdmittorInput = ({
  value,
  onChange,
}: {
  value: Admittor
  onChange: ChangeHandler
}) => {
  const { name, relation, occupation, ssid, nationality, address } = value
  const s = setField(onChange)(value)
  const setName = s('name')
  const setRelation = s('relation')
  const setOccupation = s('occupation')
  const setSSID = s('ssid')
  const setNationality = s('nationality')
  const setAddress = s('address')

  return (
    <FormGroup>
      <Name gender={Gender.Male} value={name} onChange={setName} admittor />
      <Relation value={relation} onChange={setRelation} />
      <Occupation value={occupation} onChange={setOccupation} />
      <SSID value={ssid} onChange={setSSID} />
      <Nationality value={nationality} onChange={setNationality} />
      <Address value={address} onChange={setAddress} />
    </FormGroup>
  )
}
