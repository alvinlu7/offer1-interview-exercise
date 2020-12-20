import homesReducer from './home/homesReducer'
import filtersReducer from './home/filtersReducer'
import detailsReducer from './detail/detailsReducer'
import authReducer from './auth/authReducer'
import messagesReducer from './message/messageReducer'

const rootReducer = (state = { home: {} }, action) => {
  return {
    home:{
      homes: homesReducer(state.home.homes, action),
      filters: filtersReducer(state.home.filters, action)
    },
    detail: detailsReducer(state.detail, action),
    auth: authReducer(state.auth, action),
    message: messagesReducer(state.message, action)
  }
}

export default rootReducer