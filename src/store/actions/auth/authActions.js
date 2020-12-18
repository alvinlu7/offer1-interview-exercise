import api from '../../../../services/api'
import { useCookies } from 'react-cookie'

export const login = (username, password) => {
  return async dispatch => {
    try{
      const { data: auth } = await api.post('/login', { username, password })
      const [cookies, setCookie] = useCookies(['auth'])
      api.defaults.headers.Authorization = `${auth.tokenType} ${auth.token}`
      setCookie('auth', auth, {
        maxAge: auth.expiresIn,
        path: '/'
      })
      dispatch({ type: '/auth/login' })
    }
    catch(e){
      dispatch({
        type: '/homes/error',
        payload: e.message
      })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    try{
      const [cookies, setCookie, removeCookie] = useCookies(['auth'])
      delete api.defaults.headers.Authorization
      removeCookie('auth')
      dispatch({ type: '/auth/logout' })
    }
    catch(e){
      dispatch({
        type: '/homes/error',
        payload: e.message
      })
    }
  }
}