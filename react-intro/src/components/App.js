import React from 'react'; 
import { HeaderComponent } from './Head.js';
import { MainComponent } from './Main.js';


export function App(props) {
    return (
       <div>
         <HeaderComponent />
         <MainComponent />
       </div>
     )
    }