import "../styles/Chat.css"
import "../styles/Match.css"
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState,useRef } from "react";
import { auth, db, logout } from "../firebase";
import { onSnapshot, query, collection, addDoc, getDocs, where, Timestamp, deleteDoc } from "firebase/firestore";
import { v4 as uuid4 } from 'uuid';


function Chat1() {
  const [user, loading, error] = useAuthState(auth);
  const [messages, setMessages] = useState('');
  const [userDocId, setUserDocId] = useState(''); 
  const [setMsg, setMsgDocId] = useState(''); 

  useEffect(() => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          snapshot.docs.forEach((doc) => {
            setUserDocId(doc.id);
            console.log(doc.data())
          })
        }
      });
    } catch(err) {
      console.log('Error fetching collection data:', err);
    }
  }, [user]);

  useEffect(() => {
    try {
      const q = query(collection(db, 'users', userDocId,"messages"), where("messages", "==", messages));
      onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
            snapshot.docs.forEach((doc) => {
            setMsgDocId(doc.id);
            console.log(doc.data().msgID);
          });
        };
      });
    } catch(err) {
        console.log('Error fetching collection data:', err);
    }
  }, [user]);

  const handleSubmit = async (e) => {
      e.preventDefault();

    try {
          const msgUUID = uuid4();
          await addDoc(collection(db, 'users', userDocId, 'message'), {
          msgID: msgUUID,
          messages: messages,
          created: Timestamp.now()
        });
      } catch (err) {
          alert('Error fetching collection data', err);
      }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const msgUUID = uuid4();
  //     const newMessage = {
  //       msgID: msgUUID,
  //       text: messages.join(", "), // Join the array of messages with a separator
  //       created: Timestamp.now()
  //     };
  
  //     // Update the messages state by adding the new message to the existing array
  //     setMessages((prevMessages) => [...prevMessages, newMessage]);
  
  //     // Clear the input field by setting messages to an empty array
  //     setMessages([]);
  
  //     // Add the new message to Firestore
  //     await addDoc(collection(db, "users", userDocId, "message"), newMessage);
  //   } catch (err) {
  //     alert("Error fetching collection data", err);
  //   }
  // };

    return (
      <div>
        <meta charSet="utf-8" />
        <title>InuKoi</title>
        <link rel="stylesheet" href="styles/content.css" />
        <link rel="stylesheet" href="styles/chat.css" />
        <header>
          <div className="header-container">
            <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
            <div className="nav">
              <a className="inactive" href="choose">Match</a>
              <a className="active" href="chat">Chat</a>
              <a className="inactive" href="explore">Explore</a>            
            </div>
            <a href="profile">
              <img className="profilepic" src="image/profilepic.png" />
            </a>
          </div>
        </header>
        <div className="chat-container">
          <div className="chattop">
            <div className="contacttitle">
              <div className="cpicset">
                <img className="ccmate" src="image/mate.png" />
                <img className="ccdogpic" src="image/dogpic.png" />
                <img className="ccgirlpic" src="image/girlpic.png" />
              </div>
              <div className="ccdog">
                <div className="ccname">Kopi</div>
                <img className="ccgender" src="image/male.png" />
              </div>
            </div>
          </div>
          <div className="chattings">
            {/* <div className="user">Hey I’m Ethan, and Ai is my Shiba Inu.</div>
            <div className="user2">Heyy Ethan, I’m Ruby and the shiba you see in my pfp is Kopi!</div>
            <div className="user">Ooh he’s so adorable :o I bet the two of them will fall in love in no time.</div>
            <div className="user2">It’s been really hard to find another Shiba Inu in Jakarta, I’m glad I found one haha</div> */}
                {/* <ul className="message-list">
                {messages.map((x) => (
                    <Message
                        key={x.id}
                        messages={x}
                        isOwnMessage={x.uid === user.uid}
                    />
                  ))}
                </ul>             */}
            <div className="user">{messages}</div>
          </div>
          <div className="chatbottom">
            <img className="phoneicon" src="image/phoneicon.png" />
            <form className="chattype" onSubmit={handleSubmit}>
              <img className="add" src="image/add.png" /> 
              <input 
              type="text" 
              id="textsmtg" 
              name="textsmtg" 
              placeholder="Write something..." 
              onChange={(e) => setMessages(e.target.value)}/>
              {/* button just for simplify testing */}
              <button type="submit" ></button>
              <img className="send" src="image/send.png" alt="Send"/>
            </form>
            <img className="mic" src="image/mic.png" />
          </div>
        </div>
        <div className="recentcontact">
          <div className="sidetitle">Recent Chat</div>
          <div className="side-container">
            <div className="contact1">
              <div className="cpicset">
                <img className="cmate" src="image/mate.png" />
                <img className="cdogpic" src="image/dogpic.png" />
                <img className="cgirlpic" src="image/girlpic.png" />
              </div>
              <div className="contactinfo">
                <div className="cdog">
                  <a href="chat1"><div className="cname">Kopi</div></a>
                  <img className="cgender" src="image/male.png" />
                </div>
                <div className="clastmsg">It’s been really hard to find another Shiba Inu in Jakarta, I’m glad I found one haha</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function Message({ message, isOwnMessage }) {
    const { displayName, text } = message;
    return (
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            <h4 className="sender">{isOwnMessage ? 'You' : displayName}</h4>
            <div>{text}</div>
        </li>
    );
}

export default Chat1;