import React from 'react';
import ReactDOM from 'react-dom';

const Modal= ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal (
    <React.Fragment>
        <div className='App-popup'></div>
        <div className='App-popup' aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className='App-popup'>
        <div className='App-popup'>
          <button type="button" className='App-popup' data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
    </React.Fragment>, document.body
): null;

export default Modal;