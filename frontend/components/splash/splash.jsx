import React from 'react';
import SplashNavbar from './splash_navbar_container';
import { Link } from 'react-router-dom';

const Splash = ({ loggedIn }) => {
  const buttons = loggedIn ?
    <div className='splash-buttons'>
      <Link to='/channels/@me'>
        <button className='splash-button-blue'>Open</button>
      </Link>
    </div> :
    <div className='splash-buttons'>
      <Link to='/login'>
        <button className='splash-button-white'>Login</button>
      </Link>
      <Link to='/register'>
        <button className='splash-button-blue'>Register</button>
      </Link>
    </div>

  return (
    <div className='splash-container'>
      <SplashNavbar />

      <header className='splash-header'>
        <h1>It's time to ditch the corner and the block</h1>
        <p>Text chat for cats trying to squash beef, start beef,
            and keyboard cyph with all the other fools from around
            the way. It's free, street-approved, and guaranteed to
            get you the clout you deserve.</p>
      </header>

      {buttons}
    </div>
  );
};

export default Splash;