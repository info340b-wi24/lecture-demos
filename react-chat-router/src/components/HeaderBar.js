import React from 'react';

export function HeaderBar(props) {
  const currentUser = props.currentUser;

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>

      {/* links go here */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/chat">Chat</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signin">
            <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
          </a>
        </li>
      </ul>

    </header>
  )
}

// // Slide 21 - Links
// import React from 'react';
// import { Link } from 'react-router-dom';

// export function HeaderBar(props) {
//   const currentUser = props.currentUser;

//   return (
//     <header className="text-light bg-primary px-1 d-flex justify-content-between">
//       <h1>React Chat</h1>

//       {/* links go here */}
//       <ul className="nav nav-pills">
//         <li className="nav-item">
//           <Link className="nav-link" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/chat">Chat</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/signin">
//             <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
//           </Link>
//         </li>
//       </ul>

//     </header>
//   )
// }

// // Slide 25 - Fix the links now that we have Outlet and nested path
// import React from 'react';
// import { Link } from 'react-router-dom';

// export function HeaderBar(props) {
//   const currentUser = props.currentUser;

//   return (
//     <header className="text-light bg-primary px-1 d-flex justify-content-between">
//       <h1>React Chat</h1>

//       {/* links go here */}
//       <ul className="nav nav-pills">
//         <li className="nav-item">
//           <Link className="nav-link" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/app/chat">Chat</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/app/about">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/app/signin">
//             <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
//           </Link>
//         </li>
//       </ul>

//     </header>
//   )
// }


// // Slide 28 - Fix the links now that we have switched to protected
// import React from 'react';
// import { Link } from 'react-router-dom';

// export function HeaderBar(props) {
//   const currentUser = props.currentUser;

//   return (
//     <header className="text-light bg-primary px-1 d-flex justify-content-between">
//       <h1>React Chat</h1>

//       {/* links go here */}
//       <ul className="nav nav-pills">
//         <li className="nav-item">
//           <Link className="nav-link" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/chat">Chat</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/signin">
//             <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
//           </Link>
//         </li>
//       </ul>

//     </header>
//   )
// }