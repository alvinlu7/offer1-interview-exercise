const initialState = {
  loggedIn: false,
  error: null
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case '/auth/login': {
      return {
        loggedIn: true,
        error: null
      }
    }
    case '/auth/logout':{
      return {
        loggedIn: false,
        error: null
      }
    }
    case '/auth/error':{
      return {
        ...state,
        error: action.payload
      }
    }
    default: 
      return state
  }
}

export default authReducer