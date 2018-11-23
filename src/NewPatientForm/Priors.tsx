import * as React from 'react'

import { memoize } from './memoize'
import { FormGroup, Label, Input } from 'reactstrap'

interface PriorsProps {
  illness: boolean
  hospital: boolean
  setIllness(value: boolean): void
  setHospital(value: boolean): void
}

const createOnChange = memoize(
  (onChange: (value: boolean) => void) => (arg: boolean) => () => onChange(arg),
)

export const Priors = ({
  illness,
  hospital,
  setIllness,
  setHospital,
}: PriorsProps) => (
  <>
    <FormGroup>
      <legend>هل سبق اصابته بمرض نفسي</legend>

      <FormGroup check inline className="InputField" id="illness">
        <Label check for="yesIllness">
          نعم
        </Label>

        <Input
          id="yesIllness"
          name="illness"
          type="radio"
          checked={illness}
          onChange={createOnChange(setIllness)(true)}
        />
        <FormGroup check inline className="RadioChoice">
          <Label check for="noIllness">
            لا
          </Label>
          <Input
            id="noIllness"
            name="illness"
            type="radio"
            checked={!illness}
            onChange={createOnChange(setIllness)(false)}
          />
        </FormGroup>
      </FormGroup>
    </FormGroup>

    {illness && (
      <section>
        <legend>هل سبق دخوله مستشفى للأمراض النفسية</legend>

        <FormGroup check inline id="hospital">
          <Label check for="yesHospital">
            نعم
            <Input
              id="yesHospital"
              name="hospital"
              type="radio"
              checked={hospital}
              onChange={createOnChange(setHospital)(true)}
            />
          </Label>

          <FormGroup check inline>
            <Label check for="noHospital">
              لا
            </Label>
            <Input
              id="noHospital"
              name="hospital"
              type="radio"
              checked={!hospital}
              onChange={createOnChange(setHospital)(false)}
            />
          </FormGroup>
        </FormGroup>
      </section>
    )}
  </>
)
