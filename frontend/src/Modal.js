import React, {useEffect, useState} from 'react';
import './App.css';
import ex from './ph_x-fillex.png';
import Button from 'react-bootstrap/Button';
const Modal = (props) => {
  const [hide, setHide] = useState(props.type === ""); // daca nu e setat, atunci hide este true
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

// import ReactDOM from 'react-dom';
// const Modal= ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal (
//     <React.Fragment>
//         <div className='App-popup'></div>
//         <div className='App-popup' aria-modal aria-hidden tabIndex={-1} role="dialog">
//       <div className='App-popup'>
//         <div className='App-popup'>
//           <button type="button" className='App-popup' data-dismiss="modal" aria-label="Close" onClick={hide}>
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <p>
//           Hello, I'm a modal.
//         </p>
//       </div>
//     </div>
//     </React.Fragment>, document.body
// ): null;

// export default Modal;