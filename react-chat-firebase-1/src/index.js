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
  apiKey: "AIzaSyCatDJuMOA_W1UNeBvbcPjI2yPU95cIA5Q",
  authDomain: "info340bwi24-test2-27-24.firebaseapp.com",
  databaseURL: "https://info340bwi24-test2-27-24-default-rtdb.firebaseio.com",
  projectId: "info340bwi24-test2-27-24",
  storageBucket: "info340bwi24-test2-27-24.appspot.com",
  messagingSenderId: "1038383113335",
  appId: "1:1038383113335:web:bd223cf41b00800cc51272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);