import * as React from 'react'
import { FormGroup } from 'reactstrap'
import field from 'src/Components/field'
import { PersonInvolved, QuickEntry } from 'src/model/Report'
import PeopleInvolved from './PeopleInvolved'

type ChangeHandler = (value: QuickEntry) => void

interface QuickEntryProps {
  value: QuickEntry
  onChange: ChangeHandler
}

const ReasonsForQuickEntry = field(
  'reasonsForQuickEntry',
  'اسباب الاستعجال في النقل',
)

const setReasons = (onChange: ChangeHandler) => (qentry: QuickEntry) => (
  value: string,
) =>
  onChange({
    ...qentry,
    reasons: value,
  })

const setPeopleInvolved = (onChange: ChangeHandler) => (qentry: QuickEntry) => (
  index: number,
) => (personInvolved: PersonInvolved) => {
  const peopleInvolved = qentry.peopleInvolved.slice()

  peopleInvolved[index] = personInvolved

  onChange({
    ...qentry,
    peopleInvolved,
  })
}

export const QuickEntryInput = ({ value, onChange }: QuickEntryProps) => (
  <FormGroup>
    <ReasonsForQuickEntry
      value={value.reasons}
      onChange={setReasons(onChange)(value)}
    />
    <PeopleInvolved
      value={value.peopleInvolved}
      onChange={setPeopleInvolved(onChange)(value)}
    />
  </FormGroup>
)
