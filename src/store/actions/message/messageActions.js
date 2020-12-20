import api from '../../../services/api'

export const checkUserExists = (email) => {
  return async dispatch => {
    try{
      const {data: payload} = await api.get('/users/checkUserByEmail', {params: { email } })
      dispatch({
        type: '/messages/checkUserExists',
        payload
      })
    }
    catch(e){
      dispatch({
        type: '/messages/error',
        payload: e.message
      })
    }
  }
}

export const getConversation = (id) => {
  return async dispatch => {
    try{
      const {data: payload} = await api.get('/messages/getConversation', {params: { id } })
      dispatch({
        type: '/messages/getConversation',
        payload
      })
    }
    catch(e){
      dispatch({
        type: '/messages/error',
        payload: e.message
      })
    }
  }
}

export const getConversations = () => {
  return async dispatch => {
    try{
      const {data: payload} = await api.get('/messages/getConversations')
      dispatch({
        type: '/messages/getConversations',
        payload
      })
    }
    catch(e){
      dispatch({
        type: '/messages/error',
        payload: e.message
      })
    }
  }
}

export const sendMessage = (recieverId, message, newConversation) => {
  return async dispatch => {
    try{
      const { data } = await api.post('/messages/createMessage', 
      {
        recieverId, message
      })
      dispatch({
        type: '/messages/createMessage',
        payload: { 
          reciever: data.reciever, 
          senderId: data.senderId,
          message,
          newConversation
        }
      })
    }
    catch(e){
      dispatch({
        type: '/messages/error',
        payload: e.message
      })
    }
  }
}