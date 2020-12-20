import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getConversation, checkUserExists, sendMessage, getConversations} from '../../store/actions/message/messageActions'
import { useHistory } from 'react-router'
import { AiOutlineSend } from 'react-icons/ai'
import { animateScroll } from 'react-scroll'

const ConversationDisplay = ({email, setEmail, setActiveRecieverId, activeRecieverId, auth, message, getConversation, checkUserExists, sendMessage}) => {
  const history = useHistory()
  const [newMessage, setNewMessage] = useState('')

  const onSend = async () => {
    if(activeRecieverId){
      sendMessage(activeRecieverId, newMessage, false)
    }
    else if(message.activeReciever){
      sendMessage(message.activeReciever, newMessage, true)
      await setActiveRecieverId(message.activeReciever)
      getConversation(message.activeReciever)
    }
    setNewMessage('')
  }

  useEffect(()=> {
    if(auth.loggedIn){
      if(activeRecieverId){
        getConversation(activeRecieverId)
      }
    }
    else{
      history.replace('/login')
    }
  },[auth, activeRecieverId, getConversation, history])

  useEffect(()=> {
    if(email){
      console.log("checking email: ", email)
      checkUserExists(email)
    }
  }, [email])

  useEffect(()=> {
    animateScroll.scrollToBottom({containerId: 'messages'})
  }, [message.activeConversation])

  return(
    <div className="flex flex-col w-full h-4/5vh bg-white p-4">
      {activeRecieverId === false ? 
      (
        <div className="flex flex-col h-full">
          <input 
            className={`w-full rounded-md border-2 px-4 py-2 focus:outline-none ring-2 
              ring-${message.activeReciever ? 'green-500' : 'red-500'}`
            }
            placeholder="Send a new message: enter a user's email"
            onChange={(event)=>{
              setEmail(event.target.value)
            }}
            value={email}
          />
        </div>
      )
      :
        (message.activeConversation.length > 0 ?
          <div
            id="messages" 
            className="flex flex-col h-full overflow-scroll">
            {message.activeConversation.map(message => {
              return (
                <div className={`rounded-lg my-1 text-white px-4 py-2 ${activeRecieverId === message.senderId ? 
                  'ml-4 mr-auto text-black bg-gray-200':
                  'ml-auto mr-4 text-align-right bg-yellow-500'
                }`}>
                  {message.message}
                </div>
              )
            })}
          </div>
          :
          <p className="mt-8 text-lg font-light">No messages to show</p>
        )
      }
      <div className="flex justify-between">
        <input 
          className={`w-full rounded-md border-2 px-4 py-2 focus:outline-none`}
          placeholder="Type your message here"
          onChange={(event)=>{
            setNewMessage(event.target.value)
          }}
          onKeyPress={(event)=> {
            if(event.key === 'Enter'){
              onSend()
            }
          }}
          value={newMessage}
        />
        <button
          className="flex ml-4 justify-center items-center w-32 h-12 rounded-md px-4 py-2 focus:outline-none hover:opacity-90 text-white bg-yellow-500"
          onClick={()=>onSend()}
        >
          <AiOutlineSend color="white" size="md"/>
        </button>
      </div>
      
    </div>
  )
}

const mapStateToProps = (state) => ({message: state.message, auth: state.auth})

export default connect(mapStateToProps, {getConversation, checkUserExists, sendMessage})(ConversationDisplay)