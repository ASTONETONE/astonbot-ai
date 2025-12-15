import React, { useState } from 'react';

const Botinput= ({ message, setMessage }) => {

    const [input, setInput] = useState("");

    function saveInput(event){
        setInput(event.target.value);
    }


    function sendMessage(){

        if(!input.trim()) return;

        const userText = input.toLowerCase();
        let botchat = '';
        if(userText.includes("hey") || userText.includes("hi") || userText.includes("hello") || userText.includes("hy")){
            botchat = "Hi too, how can I help you?";
        }
        else if(userText.includes("name") || userText.includes("what is your name") || userText.includes("your name")){
            botchat = "Am AstonBot AI your assistant🤖 , how can I help you?";
        }
        else if(userText.includes("how are you doing") || userText.includes("how is you") || userText.includes("is you")){
            botchat = "Am doing great, thanks for asking 🥰";
        }
        else if(userText.includes("day") || userText.includes("time") || userText.includes("is the time") || userText.includes("is today") || userText.includes("today") || userText.includes("date")){
            const now = new Date();
            const day = now.toDateString();
            const time = now.toTimeString();
            botchat = `Date: ${day} at: ${time}`;
        }
        else if(userText.includes("inventor") || userText.includes("inventer") || userText.includes("creator") || userText.includes("founder")){
            botchat="I was invented by Astonetone who is my founder";
        }
        else{
            botchat = "Sorry I didn't quite understand, Currently I only know how to greet, my name, to get date and time, how am doing and my inventor, Let me know how I can help you?"
        }

        setMessage([
            ...message, {
                message: input,
                sender: 'user',
                id: crypto.randomUUID(),
            }, {
                message: botchat,
                sender: 'bot',
                id: crypto.randomUUID(),
            }
        ])

        setInput("");
    }


  return (
    <div className='botinput-container'>
        <h1>AstonBot AI</h1>
        <h2>What's up Today?</h2>
        <div className='inputbtn'>
            <input 
            type="text"
            placeholder="Type your message here......"
            onChange={saveInput}
            value={input}
       />
       <button onClick={sendMessage}>
        Send
       </button>
        </div>
    </div>
  );
}

export default Botinput
