import axios from 'axios'

const API_URL = 'https://timely-rain-production.up.railway.app/'

const api = axios.create({
  baseURL: API_URL
})

export default api
