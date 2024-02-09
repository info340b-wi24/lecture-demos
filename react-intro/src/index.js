import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from './components/App.js'

// const message = "Hello Huskies!";
// const element = (
//   <header>
//     <h1>{message}</h1>
//     <p>This is some text</p>
//   </header>
// )



// const msgElem = <h1 id="hello" className="rainy">Hello msgElem</h1>;
// const msgElem = (
//   <div>
//     <header className="bg-dark p-3">
//       <h1 id="hello" className="text-light"> Hi Folks</h1>
//     </header>

//     <main>
//       <p>This is a paragraph in my main section</p>
//     </main>
//   </div>
// );

// function HelloMessage(props) {


//   //this function returns the elements (JSX)
//   //that make up the component
//   return (
//     <h1>Hello World!</h1>
//   );
// }

// const msgElem = (
//   <main>
//     <HelloMessage />
//     <HelloMessage />
//     <HelloMessage />
//   </main>
// )

// function HelloMessage(props) {
//   return <p>Hello World!</p>;
// }

// function GoodbyeMessage(props) {
//   return <p>See ya later!</p>;
// }

// function MessageList(props) {
//   return (
//      <div>
//         <HelloMessage /> {/* A HelloMessage component */}
//          <GoodbyeMessage /> {/* A GoodbyeMessage component */}
//      </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

)
