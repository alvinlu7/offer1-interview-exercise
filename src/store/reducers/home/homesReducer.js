const initialState = {
  data:[],
  home: {},
  favorites: [],
  loading: true,
  error: null
}

const homesReducer = (state = initialState, action) => {
  switch(action.type){
    case '/homes/getHomes': {
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    }
    case '/homes/getFavorites' : {
      return {
        ...state,
        favorites: action.payload
      }
    }
    case '/homes/getHome': {
      return {
        ...state,
        home: action.payload
      }
    }
    case '/homes/toggleSaveHome':{
      const newHomes = state.data.map(home => {
        if(home.id === action.payload){
          home.saved = !home.saved
        }
        return home
      })
      const newFavorites = state.favorites.filter(home => 
        home.id !== action.payload
      )
      return {
        ...state,
        data: newHomes,
        favorites: newFavorites,
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