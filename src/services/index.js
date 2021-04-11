import base from './base'

export const getContacts = async () => {
  const response = await base.get('contact')
  return response.data
}

export const deleteUser = async (id) => {
  const response = await base.delete(`contact/${id}`)
  return response.data
}

export const postUser = async (body) => {
  const response = await base.post('contact', body)
  return response.data
}
