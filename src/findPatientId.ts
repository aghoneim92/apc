const findPatientId = (search: string) => {
  const arr = search.replace('?', '').split('=')
  const patId = arr.indexOf('patientId')

  return arr[patId + 1]
}

export default findPatientId
