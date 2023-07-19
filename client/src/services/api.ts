import axios from 'axios'

const api = axios.create({
  baseURL: 'https://timely-rain-production.up.railway.app/'
})

export default api
