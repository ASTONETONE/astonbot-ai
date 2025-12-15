      //<Chatmessages 
      message = "hello, am your AI assistance" 
      user="bot" 
      />
      <Chatmessages 
      message="What is your name" 
      user="messenger" 
      />
      <Chatmessages 
      message = "Am AstonBot AI" 
      user="bot" 
      />
      <Chatmessages 
      message="Can you get me todays date?" 
      user="messenger" 
      />
      <Chatmessages 
      message = "Today is on 30th November" 
      user="bot" 
      />
      <Chatmessages 
      message="Where do you get answers from?" 
      user="messenger" 
      />
      <Chatmessages 
      message = "Oooops, you are too funny, but from the internet" 
      user="bot" 
      />
    </div>


    styling 
    * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: #00ff88;
  font-family: Arial, Helvetica, sans-serif;
}

/*NAV BAR STYLING*/
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: purple;
  padding: 20px 10px;
}

.logo-container {
  display: flex;
}

.logo-icon {
  font-size: 60px;
  font-weight: bold;
  border: 5px solid;
  border-radius: 50%;
  padding: 10px 20px;
  margin-right: 10px;
  margin-left: 10px;
}

.text {
  align-items: center;
  margin-top: 20px;
}

.text .main-text {
  font-size: 30px;
  font-weight: bold;
  display: block;
}

.text .sub-text {
  font-size: 18px
}

.toggle-menu {
  font-size: 20px;
  font-weight: bold;
  display: none;
  cursor: pointer;
  
}

.navbar-links {
  margin-right: 20px;
}

.navbar-links ol {
  display: flex;
  list-style: none;
  gap: 10px;
}

.navbar-links ol a {
  text-decoration: none;
  color: #00ff88;
  font-size: 20px;
}
.navbar-links ol a:hover{
  color: #fff;
}

@media(max-width: 768px){
  .navbar{
    justify-content: space-between;
    padding: 20px 0;
  }

  .logo-icon {
    margin-left: 0;
  }

  .toggle-menu {
    display: block;
    margin-right: 10px;
  }

  .red {
    color: red;
    text-align: right;
  }

  .navbar-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    

    transform: translateX(100%);
    transition: 0.3s ease-in-out;
    z-index: 1500;

    background-color: purple;

  }

  .navbar-links.open{
    transform: translateX(0);
  }
  .navbar-links ol {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 20px;
    padding-left: 20px;
  }

   .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    animation: fadeIn 0.3s ease-in-out;
    z-index: 1000;
  }
    .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    color: #00ff88;
  }


}


  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

    @keyframes slideLinks {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }




  /*CHAT INPUT STYLING*/
  .chatinput {
    padding: 20px 80px;
    margin: 0 auto;
  }

  .chatmessages {
    padding: 20px 80px;
  }