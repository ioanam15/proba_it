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

function App() {
  const [type, setType] = useState(""); //varianta default
  const showLogin = () => {
    setType("Login");
  }
  const showRegister = () => {
    setType("Register");
  }

  const changeType= () => {
    setType("");
  }
   ///const {isShowing, toggle} = useModal();

  return (
    <div className="App-body">


      
      <nav className='App-navbar' >
        <img src={logo} className='App-logo' alt=""/>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a className='App-login' onClick={showLogin}>Login</a>
          <a className='App-register' onClick={showRegister}>Register</a>
        </div>
        </div>
      </nav>

      <div className='App-body'>
      {/* <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      /> */}

        <div>
          <a className='App-testoasa'> <img src={testoasa} alt=""/></a>
          <a className='App-text'>Opiniile sunt mai importante ca niciodată. 
          Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și 
          să înțeleagă mai bine nevoile și dorințele acesteia.</a>
        </div>

        <Modal type = {type} close={changeType}/>

        <div className='App-doipoll'>
          <div className='App-poll'>
            <div className='App-pollq'>Ce animal se afla pe tricourile departamentului de IT?</div>
            <div className='App-pollm'>Make a choice:</div>
            <div className='App-polla'>Un elefant</div>
            <div className='App-polla'>O testoasa</div>
            <div className='App-polla'>Un lenes</div>
            <div className='App-polla'>Un caine</div>
          </div>

          <a className='App-poll'>
            <a className='App-pollq'>Ce animal se afla pe tricourile departamentului de IT?</a>
            <a className='App-pollm'>Make a choice:</a>
            <a className='App-polla'>Un elefant</a>
            <a className='App-polla'>O testoasa</a>
            <a className='App-polla'>Un lenes</a>
            <a className='App-polla'>Un caine</a>
            <a className='App-vote'>Vote</a>
          </a>
        </div>

        <div className='App-doipoll'>
          <a className='App-poll'>
            <a className='App-pollq'>Ce animal se afla pe tricourile departamentului de IT?</a>
            <a className='App-pollm'>Make a choice:</a>
            <a className='App-polla'>Un elefant</a>
            <a className='App-polla'>O testoasa</a>
            <a className='App-polla'>Un lenes</a>
            <a className='App-polla'>Un caine</a>
          </a>

          <a className='App-poll'>
            <a className='App-pollq'>Ce animal se afla pe tricourile departamentului de IT?</a>
            <a className='App-pollm'>Make a choice:</a>
            <a className='App-polla'>Un elefant</a>
            <a className='App-polla'>O testoasa</a>
            <a className='App-polla'>Un lenes</a>
            <a className='App-polla'>Un caine</a>
          </a>
        </div>

        {/* <div>
          <a className='App-popup'>
            <img src={ex} className='App-ics' alt="ex" />
            <a className='App-pp-log'>Login</a>
            <a className='App-camp'>Email</a>
            <a className='App-camp'>Password</a>
            <Button className='App-pp-buton'>Login</Button>
          </a>
        </div>
        <div>
          <a className='App-popup'>
            <img src={ex} className='App-ics' alt="ex" />
            <a className='App-pp-log'>Register</a>
            <a className='App-camp'>Email</a>
            <a className='App-camp'>Password</a>
            <a className='App-camp'>Confirm password</a>
            <Button className='App-pp-buton'>Create account</Button>
          </a>
        </div> */}
      </div>

      <footer className='App-footer'>
        <p>
          <a href="https://www.instagram.com/lsacbucuresti/" style={{"textDecoration" : "none"}}> <img src={insta} alt="insta"/> </a>
          <a href="https://www.facebook.com/LsacBucuresti" style={{"textDecoration" : "none"}}> <img src={fb} alt="fb" /> </a>
          <a href="https://www.twitch.tv/lsac_bucuresti" style={{"textDecoration" : "none"}}> <img src={twitch} alt="twitch" /> </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
