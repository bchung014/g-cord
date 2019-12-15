import React from 'react';
import AddServer from '../modal/add_server/add_server';
import CreateServer from '../modal/add_server/create_server';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;

  switch(modal) {
    case 'add_server':
      component = <AddServer />
      break;
    case 'create_server':
      component = <CreateServer />
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );

};

export default Modal;