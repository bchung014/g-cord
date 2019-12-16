import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MenuHeader extends React.Component {

  render() {
    const { server } = this.props;
    const menuTitle = !server ? 
      'Home' : server.name;

    return (
      <div className='menu-header'>
        <div className='menu-header-title'>
          {menuTitle}
        </div>

        <div className='menu-header-icon'>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    );
  }

}

const msp = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.channelId]
});

const mdp = () => {
};

export default withRouter(connect(msp, null)(MenuHeader));