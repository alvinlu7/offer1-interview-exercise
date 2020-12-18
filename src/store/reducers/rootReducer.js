import homesReducer from './home/homesReducer'
import filtersReducer from './home/filtersReducer'
import detailsReducer from './detail/detailsReducer'
import authReducer from './auth/authReducer'

const rootReducer = (state = { home: {} }, action) => {
  return {
    home:{
      homes: homesReducer(state.home.homes, action),
      filters: filtersReducer(state.home.filters, action)
    },
    detail: detailsReducer(state.detail, action),
    auth: authReducer(state.auth, action)
  }
}

export default rootReducer