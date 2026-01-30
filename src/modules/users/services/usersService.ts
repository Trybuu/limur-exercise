import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

export const getUsers = async () => {
  const response = await instance.get('/users')
  return response.data
}

export const getUserById = async (id: number) => {
  const response = await instance.get(`/users/${id}`)
  return response.data
}
