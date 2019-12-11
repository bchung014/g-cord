import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavbar = () => {

  return (
    <nav className='splash-navbar'>
      <div>
        <Link to='/'><img className='splash-navbar-logo' src={window.icon} /></Link>
      </div>

      <div>
        <Link to='/login'><button className='splash-navbar-login'>Login</button></Link>
      </div>
    </nav>
  );

};

export default SplashNavbar;