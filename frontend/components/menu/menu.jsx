import React from 'react';
import { connect } from 'react-redux';
import MenuHeader from './menu_header';
import MenuContent from './menu_content';
import MenuFooter from './menu_footer';

const Menu = () => {

  return(
    <div className='menu-container'>
      <MenuHeader />
      <MenuContent />
      <MenuFooter />
    </div>
  );
};


const msp = () => {
};

const mdp = () => {
};

export default connect(null, null)(Menu);