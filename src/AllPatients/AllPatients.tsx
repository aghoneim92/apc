import * as React from 'react'
import Patient from '../model/Patient'

interface Props {
  patients: Patient[]
}

const AllPatients = ({ patients }: Props) => (
  <section>
    {patients.map(({ id, name, dateOfEntry, address }) => (
      <div key={id}>
        <div>{name}</div>
        <div>رقم القيد: {id}</div>
        <div>رقم الغرفة: ٥ تاريخ الدخول: {dateOfEntry}</div>
        <div>العنوان: {address}</div>
        <div>مادة الدخول</div>
        <div>تليفون</div>
        <div>الاستشاري</div>
      </div>
    ))}
  </section>
)

export default AllPatients
