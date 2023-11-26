import Navbar from 'react-bootstrap'
import logo from './logo.png';
import insta from './mdi_instagram.png'
import fb from './uil_facebook.png'
import twitch from './mdi_twitch.png'
import ex from './ph_x-fillex.png'
import './App.css';

function App() {
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

      <div className="App-header">
      <div>
        <a className="App-popup">
          <img src={ex} className="App-ics" alt="ex" />
          <a className='App-pp-log'>Login</a>
          <a className="App-pp-buton">Login</a>
        </a>
      </div>
      </div>

      <footer className="App-footer">
        <p>
        <img src={insta} alt="insta" />
        <img src={fb} alt="fb" />
        <img src={twitch} alt="twitch" />
        </p>
      </footer>
    </div>
  );
}

export default App;
