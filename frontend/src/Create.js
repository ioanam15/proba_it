import React, {useEffect, useState} from 'react';
import './App.css';
import ex from './ph_x-fillex.png';
import Button from 'react-bootstrap/Button';
const Create = (props) => {
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
      <div className='App-create'>
        <img src={ex} className='App-ics' alt="ex" onClick={makeHidden}/>
        <a className='App-pp-log'>{props.type}</a>
        <input type='text' className='App-cp-crt' placeholder='Type your question here'/>
        <input type='text' className='App-cp-crt' placeholder='Option 1'/>
        <input type='text' className='App-cp-crt' placeholder='Option 2'/>
        <input type='text' className='App-cp-crt' placeholder='Option 3'/>
        <Button className='App-pp-buton'>Create Poll</Button>
      </div>
    ) : null
  );
}

export default Create;