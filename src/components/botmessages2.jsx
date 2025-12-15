import React, { useRef, useEffect } from 'react';
import Botmessages from './botmessages';

const Botmessages2= ({ message }) => {
 const messageMov = useRef(null);

 useEffect(() => {
    const appScroll = messageMov.current;
    if(appScroll){
        appScroll.scrollTop = appScroll.scrollHeight;
    }
 }, [message])


  return (
    <div className='message2' ref={messageMov}>
       {message.map((msg) => {
        return (
            <Botmessages
                message={msg.message}
                sender={msg.sender}
                key={msg.id}
            />
        )
       })}
    </div>
  );
}

export default Botmessages2
