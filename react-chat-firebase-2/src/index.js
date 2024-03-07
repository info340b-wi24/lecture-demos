import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
// import { initializeApp } from "firebase/app"; //added from firebase

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3EmNs14j9237OL89MnZAEX5qFF3omRHE",
  authDomain: "chatinfo340bwi24.firebaseapp.com",
  databaseURL: "https://chatinfo340bwi24-default-rtdb.firebaseio.com",
  projectId: "chatinfo340bwi24",
  storageBucket: "chatinfo340bwi24.appspot.com",
  messagingSenderId: "944233255891",
  appId: "1:944233255891:web:fa5804b9072789d5781526"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);