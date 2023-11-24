import logo from './logo.png';
import insta from './mdi_instagram.png'
import fb from './uil_facebook.png'
import twitch from './mdi_twitch.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header classname=".App-navbar">
        <p>
        <img src={logo} className="App-logo" alt="logo" />
        </p>
        <p>
        Login
      </p>
      <p>
        Register
      </p>
      </header>
      <div className="App-header">
    
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <footer className="App-footer">
        <p>
        <img src={insta} alt="insta" />
        <img src={fb} alt="fb" />
        <img src={twitch} alt="twitch" />
          incercare
        </p>
      </footer>
    </div>
  );
}

export default App;
