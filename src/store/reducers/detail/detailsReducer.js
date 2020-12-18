const initialState = {
  listingId: null,
  saved: null,
  savedCount: null,
  property: {
    state: null,
    price: null,
    propertyType: null,
    squareFeet: null,
    numberBedrooms: null,
    numberBaths: null,
    description: null,
    ownerType: null,
    primaryImageUrl: null,
    address: {
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zip: null
    },
  },
  owner: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    online: null
  },
  escrowCompany: {
    name: null,
    phone: null,
    email: null,
    officerName: null,
    address: {
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zip: null
    },
  },
  titleCompany: {
    name: null,
    phone: null,
    email: null,
    officerName: null,
    address: {
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zip: null
    },
  },
  listingAgent: {
    licenseNumber: null,
    licenseState: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    onliine: null
  },
  error: null
}

const detailsReducer = (state = initialState, action) => {
  switch(action.type){
    case '/details/getDetails': {
      return {
        ...action.payload
      }
    }
    case '/details/saveHome':{
      return {
        ...state,
        saved: action.payload.saved,
        savedCount: action.payload.savedCount
      }
    }
    case '/details/error':{
      return {
        ...state,
        error: action.payload
      }
    }
    default: 
      return state
  }
}

export default detailsReducer