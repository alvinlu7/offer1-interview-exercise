import api from '../../../../services/api'

export const getDetails = (id) => {
  return async dispatch => {
    try{
      const {data: payload} = await api.get('/details', { params: { id } })
      dispatch({
        type: '/details/getDetails',
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
      const { data } = await api.post('/homes/toggleSave', { id })
      dispatch({
        type: '/details/saveHome',
        payload: { saved: data.saved, savedCount: data.savedCount }
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