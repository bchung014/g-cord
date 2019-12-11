import React from 'react';
import SplashNavbar from './splash_navbar_container';
import { Link } from 'react-router-dom';

const Splash = () => {

  return (
    <div>
      <SplashNavbar />

      <header className='splash-header'>
        <h1>It's time to ditch the cornerstore and the abandoned trap down the block</h1>
        <p>Text chat for cats trying to squash beef, start beef,
           and keyboard cyph with all the other fools from around
           the way. It's free, street-approved, and guaranteed to
           get you the clout you deserve. Fun for all ages.
        </p>

        <div className='splash-buttons'>
          <Link to='/login'><button className='splash-login'>Login</button></Link>
          <Link to='/register'><button className='splash-register'>Register</button></Link>
        </div>
      </header>
    </div>
  );

};

export default Splash;