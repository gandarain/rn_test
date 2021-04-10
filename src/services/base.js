import axios from 'axios'

const base = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default base