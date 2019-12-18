import React from 'react';
import { connect } from 'react-redux';
import ChannelsNav from '../channels_nav/channels_nav';

class MenuContent extends React.Component {

  render() {
    return (
      <div className='menu-content'>
        <ChannelsNav />
      </div>
    );
  }

}

const msp = () => {
};

const mdp = () => {
};

export default connect(null, null)(MenuContent);