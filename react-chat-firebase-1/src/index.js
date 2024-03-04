import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
// import { initializeApp } from "firebase/app"; //added from firebase

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBs02AEfF36kM5xLaXyJHlgD5QDXBOMX04",
  authDomain: "info340au23b.firebaseapp.com",
  projectId: "info340au23b",
  storageBucket: "info340au23b.appspot.com",
  messagingSenderId: "896723674526",
  appId: "1:896723674526:web:bf7cd1bf15d2e9f567228f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);