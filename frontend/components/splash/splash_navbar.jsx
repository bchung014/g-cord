import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavbar = () => {

  return (
    <nav>
      <Link to='/'>Discord</Link>
      
      <Link to='/login'>Login</Link>
    </nav>
  );

};

export default SplashNavbar;