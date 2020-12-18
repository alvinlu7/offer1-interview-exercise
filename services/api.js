import Axios from 'axios'

const urls = {
  local: 'http://localhost:3001/api',
  production: null,
}

const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default api