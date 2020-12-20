import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getConversations } from '../../store/actions/message/messageActions'
import { AiOutlineEdit } from 'react-icons/ai'
import { useHistory } from 'react-router'

const ConversationsDisplay = ({activeRecieverId, setActiveRecieverId, auth, message, getConversations}) => {
  const history = useHistory()

  useEffect(()=> {
    if(auth.loggedIn){
      getConversations()
    }
    else{
      history.replace('/login')
    }
  },[auth, getConversations, history])

  useEffect(()=> {
    if(auth.loggedIn){
      getConversations()
    }
  },[activeRecieverId, getConversations, auth])

  return(
    <div className="flex flex-col items-center h-4/5 w-1/3 bg-white p-4 border-r-2 border-gray-100">
      <button
        className="justify-between w-full h-12 py-2 bg-yellow-300 rounded-md hover:opacity-90 focus:outline-none"
        onClick={()=>setActiveRecieverId(false)}
      >
          <AiOutlineEdit color="white" size="sm"/>
      </button>
      {message.conversations.length > 0 ?
        message.conversations.map(user => {
          return (
            <div 
              className={`mt-4 flex w-full items-center border-2 shadow-md hover:bg-gray-100
                bg-${activeRecieverId === user.id ? 'yellow-100' : 'white'}
              `}
              onClick={()=>setActiveRecieverId(user.id)}
            >
              <p className="ml-4 text-lg font-light">{user.firstName} {user.lastName}</p>
              <span className={`ml-auto mr-4 h-4 w-4 rounded-full bg-${
                user.online ? 'green-500' : 'gray-200'
              }`}></span>
            </div>
          )
        })
        :
        <p className="mt-8 text-lg font-light">Send your first message</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({message: state.message, auth: state.auth})

export default connect(mapStateToProps, {getConversations})(ConversationsDisplay)