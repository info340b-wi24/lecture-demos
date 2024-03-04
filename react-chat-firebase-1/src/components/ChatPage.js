import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';

import CHAT_HISTORY from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

export default function ChatPage(props) {
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);

  const urlParamObj = useParams(); //get me the url parameters

  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]

  const currentUser = props.currentUser;
  const currentChannel = urlParamObj.channelName; //get channel name from url params


  const addMessage = (messageText) => {
    const userObj = currentUser;
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": currentChannel
    } 

    const updateChatMessages = [...chatMessages, newMessage];
    setChatMessages(updateChatMessages); //update state and re-render
  }


  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelList channels={channelList} currentChannel={currentChannel} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
        <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
      </div>
    </div>
  )

}

// //Slide 21

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDatabase, ref, set as firebaseSet} from 'firebase/database'; 
// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';

// import CHAT_HISTORY from '../data/chat_log.json';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);

//   const urlParamObj = useParams(); //get me the url parameters

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]

//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params


//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessageObj = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     // const updateChatMessages = [...chatMessages, newMessage];
//     // setChatMessages(updateChatMessages); //update state and re-render
//     const db = getDatabase();
//     const messageRef = ref(db,"message");

//     firebaseSet(messageRef, newMessageObj);

//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )

// }

// //Slide 25

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDatabase, ref, set as firebaseSet, onValue} from 'firebase/database'; 
// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';

// import CHAT_HISTORY from '../data/chat_log.json';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);

//   const urlParamObj = useParams(); //get me the url parameters

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]

//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params

//   const db = getDatabase();
//   const messageRef = ref(db, "message");
  
//   useEffect(() => {
//     onValue(messageRef, (snapshot) =>{
//       const newValue = snapshot.val();
//       console.log("firebase value changed")
//       console.log(snapshot);
//       console.log("new value: ", newValue)
//     })
//   }, []);


//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessageObj = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     // const updateChatMessages = [...chatMessages, newMessage];
//     // setChatMessages(updateChatMessages); //update state and re-render
//     const db = getDatabase();
//     const messageRef = ref(db,"message");

//     firebaseSet(messageRef, newMessageObj);

//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )

// }

// // //Slide 26
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDatabase, ref, set as firebaseSet, onValue} from 'firebase/database'; 
// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';

// import CHAT_HISTORY from '../data/chat_log.json';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState([]);

//   const urlParamObj = useParams(); //get me the url parameters

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]

//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params

//   const db = getDatabase();
//   const messageRef = ref(db, "message");
  
//   useEffect(() => {
//     const offFunction = onValue(messageRef, (snapshot) =>{
//       const newMessageObj = snapshot.val();
//       console.log(newMessageObj);

//      const updateChatMessages = [...chatMessages, newMessageObj];
//      setChatMessages(updateChatMessages); //update state and re-render
    
//      function cleanup() {
//       console.log("Component is being removed")
//       offFunction();
//      }
//      return cleanup;
//     })
//   }, []);


//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessageObj = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     // const updateChatMessages = [...chatMessages, newMessage];
//     // setChatMessages(updateChatMessages); //update state and re-render
//     const db = getDatabase();
//     const messageRef = ref(db,"message");

//     firebaseSet(messageRef, newMessageObj);

//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )

// }

// // Slide 30
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDatabase, ref, onValue, push as FirebasePush} from 'firebase/database'; 
// import { ChannelList } from './ChannelNav.js';
// import { ChatPane } from './ChatPane.js';
// import { ComposeForm } from './ComposeForm';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const [chatMessages, setChatMessages] = useState([]);

//   const urlParamObj = useParams(); //get me the url parameters

//   const channelList = [
//     'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
//   ]

//   const currentUser = props.currentUser;
//   const currentChannel = urlParamObj.channelName; //get channel name from url params

//   const db = getDatabase();
//   const allMessagesRef = ref(db, "allMessages");
  
//   useEffect(() => {
    
//       const offFunction = onValue(allMessagesRef, function(snapshot) {
//       const allMessagesObj = snapshot.val();
//       console.log(allMessagesObj);
//       const objKeys = Object.keys(allMessagesObj);
      
//       const objArray = objKeys.map((keyString) => {
//         allMessagesObj[keyString].key = keyString;
//         return allMessagesObj[keyString];
//       })
      
//      setChatMessages(objArray); //update state and re-render
    
//      function cleanup() {
//       console.log("Component is being removed")
//       offFunction();
//      }
//      return cleanup;
//     })
//   }, []);


//   const addMessage = (messageText) => {
//     const userObj = currentUser;
//     const newMessageObj = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": currentChannel
//     } 

//     // const updateChatMessages = [...chatMessages, newMessage];
//     // setChatMessages(updateChatMessages); //update state and re-render
//     const db = getDatabase();
//     const allMessagesRef = ref(db,"allMessages");

//     // firebaseSet(messageRef, newMessageObj);
//     FirebasePush(allMessagesRef, newMessageObj);

//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelList channels={channelList} currentChannel={currentChannel} />
//       </div>
//       <div className="col d-flex flex-column">
//         <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
//         <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
//       </div>
//     </div>
//   )

// }



