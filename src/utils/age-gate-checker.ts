import moment from 'moment'

export const checkAge = (input: string): boolean => {
  if (!input || typeof input !== 'string') return false

  const dateOfBirth = moment(input, 'dd-mm-yyyy')

  if (!dateOfBirth.isValid()) {
    return false
  }

  const age = moment().diff(dateOfBirth, 'years')
  return age >= 18
}
