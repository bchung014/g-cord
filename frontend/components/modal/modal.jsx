import React from 'react';
import AddServer from '../modal/add_server/add_server';
import CreateServer from './add_server/create_server_container';
import EditServer from './add_server/edit_server_container';
import JoinServer from './add_server/join_server';
import Invite from './invite';
import CreateChannel from './add_channel/create_channel_container';
import EditChannel from './add_channel/edit_channel_container';
import DeleteChannel from './add_channel/delete_channel';

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
    case 'invite':
      component = <Invite />
      break;
    case 'create_channel':
      component = <CreateChannel />
      break;
    case 'edit_channel':
      component = <EditChannel />
      break;
    case 'delete_channel':
      component = <DeleteChannel />
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