import api from '../../../services/api'

export const login = (email, password) => {
  return async dispatch => {
    try{
      const { data: auth } = await api.post('/login', { email, password })
      dispatch({ type: '/auth/login', payload: auth})
    }
    catch(e){
      dispatch({
        type: '/auth/error',
        payload: e.message
      })
    }
  }
}

export const updateLogin = (auth) => {
  return {
    type: '/auth/login',
    payload: auth
  }
}

export const logout = () => {
  return async dispatch => {
    try{
      // const [cookies, setCookie, removeCookie] = useCookies(['auth'])
      // delete api.defaults.headers.Authorization
      // removeCookie('auth')
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