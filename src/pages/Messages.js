import React, { useState, useEffect } from 'react'
import ConversationsDisplay from '../components/organisms/ConversationsDisplay'
import ConversationDisplay from '../components/organisms/ConversationDisplay'
import { useParams } from 'react-router-dom'
const Messages = () => {
  const [activeRecieverId, setActiveRecieverId] = useState(false)
  const [email, setEmail] = useState("")
  const { start } = useParams()

  useEffect(()=> {
    if(start){
      setEmail(start)
    }
  }, [start])

  return(
    <div className="bg-gray-50 flex">
      <ConversationsDisplay
        activeRecieverId={activeRecieverId}
        setActiveRecieverId={setActiveRecieverId}
      />
      <ConversationDisplay
        activeRecieverId={activeRecieverId}
        setActiveRecieverId={setActiveRecieverId}
        email={email}
        setEmail={setEmail}
      />
    </div>
  )
}

export default Messages