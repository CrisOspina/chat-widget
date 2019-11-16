import React, { useEffect } from 'react'

import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget'

// import 'react-chat-widget/lib/styles.css'
import './Chat.css'

export const Chat = () => {
  useEffect(() => {
    // Agregar
    addResponseMessage('Hello')
    toggleWidget()

    // limpiar
    return () => {
      addResponseMessage()
      toggleWidget()
    }
  }, [])

  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`)
    // Now send the message throught the backend API
  }

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title='Chat'
      subtitle=''
      senderPlaceHolder='Envía un mensaje'
      badge={1}
    />
  )
}
