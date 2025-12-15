import React, { useState } from 'react'
import Botinput from './components/botinput.jsx'
import Botmessages2 from './components/botmessages2.jsx'

const App = () => {

  const[messages, setMessages] = useState([]);

  return (
    <div>
      <main className="container">
        <header>
          
        </header>

         <Botmessages2
          message={messages}
        />

        <Botinput
          message={messages}
          setMessage={setMessages}
        />
        
      </main>
    </div>
  )
}

export default App