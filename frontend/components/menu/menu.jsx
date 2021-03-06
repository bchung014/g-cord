import React from 'react';
import { connect } from 'react-redux';
import MenuHeader from './menu_header';
import MenuContent from './menu_content';
import MenuFooter from './menu_footer';
import { withRouter } from 'react-router-dom';

const Menu = ({ serverId }) => {
  
  // RENDER SOMETHING DIFFERENT FOR HOME
  if (serverId === '@me') {
    return(
      <div className='menu-container'>
        <div className='dms-container'>
          dms
          {/* replace this with a component for DMS */}
        </div>
        <MenuFooter />
      </div>
    );
  } else return(
    <div className='menu-container'>
      <MenuHeader />
      <MenuContent />
      <MenuFooter />
    </div>
  );
};


const msp = (state, ownProps) => ({
  serverId: ownProps.match.params.serverId
});

const mdp = () => {
};

export default withRouter(connect(msp, null)(Menu));