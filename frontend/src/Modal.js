import React, {useEffect, useState} from 'react';
import './App.css';
import ex from './ph_x-fillex.png';
import Button from 'react-bootstrap/Button';
const Modal = (props) => {
  const [hide, setHide] = useState(props.type === "");
  const makeHidden = () => {
    setHide(true);
    props.close();
  }
  useEffect( ()=> {
    if (props.type !== "")
      setHide(false);
  })

  return (
    hide === false?
    (
      <div className='App-popup'>
        <img src={ex} className='App-ics' alt="ex" onClick={makeHidden}/>
        <a className='App-pp-log'>{props.type}</a>
        <input type='text' className='App-camp' placeholder='Email'/>
        <input type='text' className='App-camp' placeholder='Password'/>
        {props.type === "Register" ? (<a className='App-camp'>Confirm password</a>) : null }
        <Button className='App-pp-buton'>{props.type === "Login" ? "Login" : "Create account"}</Button>
      </div>
    ) : null
  );
}

export default Modal;