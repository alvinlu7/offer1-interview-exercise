const initialState = {
  city: null,
  priceMin: null,
  priceMax: null,
  bedroomsMin: null,
  bedroomsMax: null,
  bathroomsMin: null,
  bathroomsMax: null,
  sqftMin: null,
  sqftMax: null,
  openMenu: null
}

const filtersReducer = (state = initialState, action) => {
  switch(action.type){
    case '/filters/setOpenMenu': {
      return {
        ...state,
        openMenu: action.payload
      }
    }
    case '/filters/setCity': {
      return {
        ...state,
        city: action.payload
      }
    }
    case '/filters/setPrice': {
      return {
        ...state,
        priceMin: action.payload.min,
        priceMax: action.payload.max
      }
    }
    case '/filters/setBedrooms': {
      return {
        ...state,
        bedroomsMin: action.payload.min,
        bedroomsMax: action.payload.max
      }
    }
    case '/filters/setBathrooms': {
      return {
        ...state,
        bathroomsMin: action.payload.min,
        bathroomsMax: action.payload.max
      }
    }
    case '/filters/setSqft': {
      return {
        ...state,
        sqftMin: action.payload.min,
        sqftMax: action.payload.max
      }
    }
    default: 
      return state
  }
}

export default filtersReducer