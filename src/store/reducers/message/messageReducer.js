const initialState = {
  conversations: [],
  activeConversation: [],
  activeReciever: false,
  error: null
}

const homesReducer = (state = initialState, action) => {
  switch(action.type){
    case '/messages/checkUserExists': {
      return {
        ...state,
        activeReciever: action.payload ? action.payload : false
      }
    }
    case '/messages/getConversation': {
      return {
        ...state,
        activeConversation: action.payload
      }
    }
    case '/messages/getConversations' : {
      return {
        ...state,
        conversations: action.payload
      }
    }
    case '/messages/createMessage': {
      let newConversations = state.conversations.slice()
      const userIds = state.conversations.map(user => user.id)
      if(!userIds.includes(action.payload.reciever.id)){
        //newConversations.push(action.payload.reciever)
      }
      return {
        ...state,
        conversations: newConversations
      }
    }
    case '/messages/error':{
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