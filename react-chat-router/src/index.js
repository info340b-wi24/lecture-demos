// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App';

// //import CSS
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App /> );

// // Slide 16

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
