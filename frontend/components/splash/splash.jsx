import React from 'react';
import SplashNavbar from './splash_navbar_container';
import { Link } from 'react-router-dom';

const Splash = () => {

  return (
    <div>
      <SplashNavbar />

      <header className='splash-header'>
        <h1>It's time to ditch Skype and TeamSpeak</h1>
        <p>All-in-one voice and text chat for gamers that's free, secure,
            and works on both your desktop and phone. Stop paying for
            TeamSpeak servers and hassling with Skype. Simplify your life.</p>
        <div className='splash-buttons'>
          <Link to='/login'><button className='splash-login'>Login</button></Link>
          <Link to='/register'><button className='splash-register'>Register</button></Link>
        </div>
      </header>
    </div>
  );

};

export default Splash;