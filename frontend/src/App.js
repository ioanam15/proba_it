import Navbar from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import logo from './logo.png';
import insta from './mdi_instagram.png'
import fb from './uil_facebook.png'
import twitch from './mdi_twitch.png'
import ex from './ph_x-fillex.png'
import bg from './bgdesk.png'
import testoasa from './OBJECTS.png'
import './App.css';

import Modal from "./Modal";
import useModal from './useModal';

// const App2 = () => {
//   const {isShowing, toggle} = useModal();
//   return (
//     <div className="App">
//       <button className="button-default" onClick={toggle}>Show Modal</button>
//       <Modal
//         isShowing={isShowing}
//         hide={toggle}
//       />
//     </div>
//   );
// };

// export default App2;

function App() {
  const {isShowing, toggle} = useModal();

  return (
    <div className="App">


      
      <nav className="App-navbar" >
        <img src={logo} className='App-logo' alt=""/>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a className='App-login'>Login</a>
          <a className='App-register'>Register</a>
        </div>
        </div>
      </nav>

      <body className="App-body">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />

        <div>
          <a className='App-testoasa'> <img src={testoasa} alt=""/></a>
          <a className='App-text'>Opiniile sunt mai importante ca niciodată. 
          Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și 
          să înțeleagă mai bine nevoile și dorințele acesteia.</a>
        </div>

        <div>
          <a className="App-popup">
            <img src={ex} className="App-ics" alt="ex" />
            <a className='App-pp-log'>Login</a>
            <a className='App-camp'>Email</a>
            <a className='App-camp'>Password</a>
            <Button className="App-pp-buton">Login</Button>
          </a>
        </div>
        <div>
          <a className="App-popup">
            <img src={ex} className="App-ics" alt="ex" />
            <a className='App-pp-log'>Register</a>
            <a className='App-camp'>Email</a>
            <a className='App-camp'>Password</a>
            <a className='App-camp'>Confirm password</a>
            <Button className="App-pp-buton">Create account</Button>
          </a>
        </div>
      </body>

      <footer className="App-footer">
        <p>
        <img src={insta} alt="insta" href="https://www.instagram.com/lsacbucuresti/" />
        <img src={fb} alt="fb" />
        <img src={twitch} alt="twitch" />
        </p>
      </footer>
    </div>
  );
}

export default App;
