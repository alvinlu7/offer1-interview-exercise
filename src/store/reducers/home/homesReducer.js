const initialState = {
  data:[],
  loading: true,
  error: null
}

const homesReducer = (state = initialState, action) => {
  switch(action.type){
    case '/homes/getHomes': {
      return {
        data: action.payload,
        loading: false
      }
    }
    case '/homes/toggleSaveHome':{
      return {
        data: state.data.map(home => {
          if(home.id === action.payload.id){
            home.saved = !home.saved
          }
          return home
        }),
        loading: false
      }
    }
    case '/homes/error':{
      return {
        ...state,
        error: action.payload
      }
    }
    default: 
      return state
  }
}

export default homesReducer