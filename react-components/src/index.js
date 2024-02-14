import React from 'react';
import ReactDOM from 'react-dom/client';

//add bootstrap
import 'bootstrap/dist/css/bootstrap.css'

import './index.css';

// //create an element using JSX
// const reactElem = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(reactElem);

// //Slide 6 using an inline expression 
// const titleMessage = "Hello World!!!";
// const reactElem = <h1>{titleMessage.toUpperCase()}</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(reactElem);

// // Slide 6a (little more complex, add the header), change 'class' to 'className'


// const content = (
//     <header>
//         <h1 class="text-light px-5 py-4">Tim Carlson</h1>
//         <div class="container">
//             <p>University of Washington iSchool</p>
//             <p>
//                 <a href="http://getbootstrap.com/" className="btn btn-success">Built with Bootstrap</a>
//             </p>
//         </div>
//     </header>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// //Slide 10 - Lets do this as a react component
// function HeaderBar(props) {
//     //what does a header look like?
//     return (
//         <header>
//             <h1 className="text-light px-5 py-4">Tim Carlson</h1>
//             <h2 className="text-light px-5" >University of Washington iSchool</h2>
//             <div className="container">
//                 <p>
//                     <a href="http://getbootstrap.com/" className="btn btn-success">Built with Bootstrap</a>
//                 </p>
//             </div>
//         </header>
//     )
// }
// //my content is a Header element!!!
// const content = <HeaderBar />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// Slide 13

// function HeaderBar(props) {
//     //what does a header look like?
//     return (
//         <header>
//             <h1 className="text-light px-5 py-4">Tim Carlson</h1>
//             <h2 className="text-light px-5" >University of Washington iSchool</h2>
//             <div className="container">
//                 <p>
//                     <a href="http://getbootstrap.com/" className="btn btn-success">Built with Bootstrap</a>
//                 </p>
//             </div>
//         </header>
//     )
// }


// function JobCard(props) {
//     //do some stuff

//     //remember the image has to be closed and the 'class' needs to change to 'className'
//     return (
//         <div class="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
//             <img src="img/SeattleTimes.jpg" alt="Seattle Times logo"/>
//                 <h3>Seattle Times:  Paperboy</h3>
//         </div>
//         )
// }

// const content = (
//     <div>
//         <HeaderBar/>
//         <JobCard/>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);


// //Slide 14

// function HeaderBar(props) {
//     //what does a header look like?
//     return (
//         <header>
//             <h1 className="text-light px-5 py-4">Tim Carlson</h1>
//             <div className="container">
//                 <p>University of Washington iSchool</p>
//                 <p>
//                     <a href="http://getbootstrap.com/" className="btn btn-success">Built with Bootstrap</a>
//                 </p>
//             </div>
//         </header>
//     )
// }

// function JobCard(props) {
//     //remember the image has to be closed and the 'class' needs to change to 'className'
//     return (
//         <div className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
//             <img src="img/SeattleTimes.jpg" alt="Seattle Times logo" />
//             <h3>Seattle Times: Paperboy</h3>
//         </div>
//     )
// }

// function JobCardList(props) {
//     return (
//         <div id="class-cards" className="row">
//             <JobCard />
//             <JobCard />
//             <JobCard />
//             <JobCard />
//         </div>
//     )
// }

// const content = (
//     <div>
//         <HeaderBar />
//         <JobCardList />
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);



//Slide 14A - Making modular components - Now we're moving stuff to individual js component files

import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
