import React from 'react'

const Botmessages = ({ message, sender }) => {
  return (
    <div className={sender==='user'?'usermessage':'botmessage'}>
        {sender==='bot' && (
            <img src="./bot.png" alt=''/>
        )}
        <div className='message'>
               {message}

        </div>
                {sender==='user' && (
            <img src='./user.png' alt=''/>
        )}
    
    </div>
  )
}

export default Botmessages