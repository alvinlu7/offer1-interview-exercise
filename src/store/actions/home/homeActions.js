import api from '../../../services/api'

export const getHomes = (filters) => {
  return async dispatch => {
    try{
      const {data: payload} = await api.get('/homes', { params: filters })
      dispatch({
        type: '/homes/getHomes',
        payload
      })
    }
    catch(e){
      dispatch({
        type: '/homes/error',
        payload: e.message
      })
    }
  }
}

export const getFavorites = () => {
  return async dispatch => {
    try{
      const {data: payload} = await api.get('/homes/favorites')
      dispatch({
        type: '/homes/getFavorites',
        payload
      })
    }
    catch(e){
      dispatch({
        type: '/homes/error',
        payload: e.message
      })
    }
  }
}

export const getHome = (id) => {
  return async dispatch => {
    try{
      const {data: payload} = await api.get('/home', { params: { id } })
      dispatch({
        type: '/homes/getHome',
        payload
      })
    }
    catch(e){
      dispatch({
        type: '/homes/error',
        payload: e.message
      })
    }
  }
}


export const toggleSaveHome = (id) => {
  return async dispatch => {
    try{
      await api.post('/homes/toggleSave', { id })
      dispatch({
        type: '/homes/toggleSaveHome',
        payload: id
      })
    }
    catch(e){
      dispatch({
        type: '/homes/error',
        payload: e.message
      })
    }
  }
}