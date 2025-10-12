import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

const api = axios.create({
  baseURL,

  withCredentials: false,

  withCredentials: true,
})

export default api
