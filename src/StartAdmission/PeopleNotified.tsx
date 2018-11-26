import * as React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { PeopleNotified } from 'src/model/Report'

const labels = {
  family: 'اهل المريض',
  hospitalManager: 'مدير المنشأة',
  socialServicesOffice: 'مكتب الخدمة الإجتماعية',
  nationalCommittee: 'المجلس القومي / الإقليمي للصحة النفسية',
}

type ChangeHandler = (value: PeopleNotified) => void

interface Props {
  value: PeopleNotified
  onChange: ChangeHandler
}

const setValue = (key: string) => (onChange: ChangeHandler) => (
  value: PeopleNotified,
) => () => onChange({ ...value, [key]: !value[key] })

const PeopleNotified = ({ value, onChange }: Props) => (
  <FormGroup>
    <legend>تم ابلاغ كل من</legend>
    {Object.entries(labels).map(([key, label]) => (
      <FormGroup inline check key={key}>
        <Label for={label} check>
          {label}
          <Input
            id={label}
            type="checkbox"
            checked={value[key]}
            onChange={setValue(key)(onChange)(value)}
          />
        </Label>
      </FormGroup>
    ))}
  </FormGroup>
)

export default PeopleNotified
