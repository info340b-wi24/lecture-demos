import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App.js';


//render the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// // Slide 15

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import App from './components/App.js';

// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// console.log("about to send");
// const result = fetch (URL);
// console.log("result", result);

// console.log("request sent");


// //render the root
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// //Slide 18

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import App from './components/App.js';

// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// console.log("about to send");
// const aPromise = fetch (URL);

// aPromise.then(function(response) {
//     console.log("response from Promise ", response);
    
// })

// console.log("request sent");

// //render the root
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// //Slide 23
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
// import App from './components/App.js';
// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// const aPromise = fetch (URL);

// const response = aPromise.then(function(response) {
//     console.log(response);
//     console.log("response received");
    
//     const encodePromise = response.json();
//     console.log(encodePromise);

//     encodePromise.then(function(data) {
//       console.log(data)
//     })
   
// })



// //render the root
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// //Slide 26
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import App from './components/App.js';

// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";


// fetch (URL)
//     .then(function(response) {
//        const dataPromise = response.json() 
//        return dataPromise;
//     })
//     .then (function(data) {
//         console.log("data", data);
//     })


// //render the root
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />); 

// //Slide 32

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import App from './components/App.js';

// import 'whatwg-fetch' //load the polyfill we just installed via npm

// const URL = "https://api.github.com/search/repositories?q=react&sort=stars";

// async function myAsyncFunction() {
  
//   const response = await fetch(URL); //wait for fetch
//   const data = await response.json(); //wait for encode
//   console.log("data from the async method: ", data); //can use data ("synchronously")  
// }

// myAsyncFunction();

// //render the root
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
