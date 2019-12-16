import React from 'react';
import { connect } from 'react-redux';

class MenuFooter extends React.Component {

  render() {
    return (
      <div className='menu-footer'>
        Menu footer
      </div>
    );
  }

}

const msp = () => {
};

const mdp = () => {
};

export default connect(null, null)(MenuFooter);