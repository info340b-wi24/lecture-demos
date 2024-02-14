import React from 'react';

// // Example Slide 14
// export function ChatPane(props) {
//     return (
//         <div>
//             <MessageItem />;
//             <MessageItem />;
//             <MessageItem />;
//             <MessageItem />;
//         </div>
//     )
// }

// function MessageItem(props) {

//     return (
//         <div className='message'>
//             <img src='/img/Parrot.png' alt='parrot avatar' />
//             <p>Parrot</p>
//             <p>Squawk Squawk</p>
//         </div>
//     )
// }


// // Example Slide 15
// export function ChatPane(props) {
//     return (
//         <div>
//             <MessageItem />;
//             <MessageItem />;
//             <MessageItem />;
//             <MessageItem />;
//         </div>
//     )
// }

// function MessageItem(props) {

//     return (
//         <div className='message d-flex'>
//             <div className='me-2'>
//                 <img src='/img/Parrot.png' alt='parrot avatar' />
//             </div>
//             <div className='flex-grow-1'>
//                 <p className='user-name'>Parrot</p>
//                 <p>Squawk Squawk</p>
//             </div>
//         </div>
//     )
// }

// // Example Slide 16

// import CHAT_HISTORY from '../data/chat_log.json';

// export function ChatPane(props) {
   
//     return (
//         <div>
//              <MessageItem messageData={CHAT_HISTORY[0]}/>
//              <MessageItem messageData={CHAT_HISTORY[1]}/>
//              <MessageItem messageData={CHAT_HISTORY[2]}/>
//              <MessageItem messageData={CHAT_HISTORY[3]}/>
//         </div>
//     )
// }

// function MessageItem(props) {
//     const userName = props.messageData.userName;
//     const userImg = props.messageData.userImg;
//     const text = props.messageData.text;

//     return (
//         <div className='message d-flex'>
//             <div className='me-2'>
//                 <img src={userImg} alt={userName+ " avatar"} />
//             </div>
//             <div className='flex-grow-1'>
//                 <p className='user-name'>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }

// // Slide 17
// import CHAT_HISTORY from '../data/chat_log.json';

// export function ChatPane(props) {
   
//     return (
//         <div>
//              <MessageItem messageData={CHAT_HISTORY[0]}/>
//              <MessageItem messageData={CHAT_HISTORY[1]}/>
//              <MessageItem messageData={CHAT_HISTORY[2]}/>
//              <MessageItem messageData={CHAT_HISTORY[3]}/>
//         </div>
//     )
// }

// function MessageItem(props) {
//     const userName = props.messageData.userName;
//     const userImg = props.messageData.userImg;
//     const text = props.messageData.text;

//     return (
//         <div className='message d-flex mb-2'>
//             <div className='me-2'>
//                 <img src={userImg} alt={userName+ " avatar"} />
//             </div>
//             <div className='flex-grow-1'>
//                 <p className='user-name'>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }


// // Slide 18
// import CHAT_HISTORY from '../data/chat_log.json';

// export function ChatPane(props) {

//     const messageItemArray = CHAT_HISTORY.map((messageObj) => {
//         const element = <MessageItem messageData={messageObj} key={messageObj.timestamp} />
//         return element;
// })
//     return (
//         <div className='pt-2'>
//         {messageItemArray}  
//         </div>     
//     )
// }

// function MessageItem(props) {
//     const { userName, userImg, text} = props.messageData

//     return (
//         <div className='message d-flex mb-2'>
//             <div className='me-2'>
//                 <img src={userImg} alt={userName+ " avatar"} />
//             </div>
//             <div className='flex-grow-1'>
//                 <p className='user-name'>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }

// // Slide 23 Example - Only show current channel messages

// import CHAT_HISTORY from '../data/chat_log.json';

// export function ChatPane(props) {
//     const currentChannel='random';

//     // const currentChannel = props.currentChannel;
//     const channelMessage = CHAT_HISTORY.filter((msgObj) => {
//         //if current channel, then keep
//         return (msgObj.channel === currentChannel)
//     })
    
//     const messageItemArray = channelMessage.map((messageObj) => {
//         const element = <MessageItem messageData={messageObj} key={messageObj.timestamp}/>
//         return element;
// })

//     return (
//         <div className='pt-2'>
//         {messageItemArray}  
//         </div>     
//     )
// }

// function MessageItem(props) {

//     const { userName, userImg, text} = props.messageData

//     return (
//         <div className='message d-flex mb-2'>
//             <div className='me-2'>
//                 <img src={userImg} alt={userName+ " avatar"} />
//             </div>
//             <div className='flex-grow-1'>
//                 <p className='user-name'>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }

// // Slide 24 Example
// import CHAT_HISTORY from '../data/chat_log.json';

// export function ChatPane(props) {

//     const currentChannel = props.currentChannel;
//     const channelMessage = CHAT_HISTORY.filter((msgObj) => {
//         //if current channel, then keep
//         return (msgObj.channel === currentChannel)
//     })
    
//     const messageItemArray = channelMessage.map((messageObj) => {
//         const element = <MessageItem messageData={messageObj} key={messageObj.timestamp}/>
//         return element;
// })

//     return (
//         <div className='pt-2'>
//         {messageItemArray}  
//         </div>     
//     )
// }

// function MessageItem(props) {

//     const { userName, userImg, text} = props.messageData

//     const handleClick = (event) => {
//         console.log("you clicked on", userName);
//     }

//     return (
//         <div className='message d-flex mb-2'>
//             <div className='me-2'>
//                 <img src={userImg} alt={userName+ " avatar"} onClick={handleClick} />
//             </div>
//             <div className='flex-grow-1'>
//                 <p className='user-name'>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }
