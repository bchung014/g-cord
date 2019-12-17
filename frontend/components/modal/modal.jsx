import React from 'react';
import AddServer from '../modal/add_server/add_server';
import CreateServer from './add_server/create_server_container';
import EditServer from './add_server/edit_server_container'
import JoinServer from './add_server/join_server';

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
    case 'edit_server':
      component = <EditServer />
      break;
    case 'join_server':
      component = <JoinServer />
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