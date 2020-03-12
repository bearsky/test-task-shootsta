import axios from "axios"

const APIRequest = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 100000,
  headers: {
    "Content-Type": "application/json"
  }
})

export default APIRequest
