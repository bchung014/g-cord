import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavbar = ({ loggedIn }) => {
  const login = loggedIn ?
    <div>
      <Link to='/main' className='hello'><button className='splash-navbar-login'>Open</button></Link>
    </div> :
    <div>
      <Link to='/login'><button className='splash-navbar-login'>Login</button></Link>
    </div>


  return (

    <nav className='splash-navbar'>
      <div>
        <Link to='/'><img className='splash-navbar-logo' src={window.icon} /></Link>
      </div>

      {login}
    </nav>

  );

};

export default SplashNavbar;