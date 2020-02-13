import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavbar = ({ loggedIn }) => {
  const login = loggedIn ?
    <Link to='/servers/@me'><button className='splash-navbar-login'>Open</button></Link>
      :
    <Link to='/login'><button className='splash-navbar-login'>Login</button></Link>


  return (

    <nav className='splash-navbar'>
      <div className='left-nav'>
        <Link to='/'><img className='splash-navbar-logo' src={window.icon} /></Link>

        <a href='http://upnext-aa.herokuapp.com/#/' className='left-navlink'>UpNext</a>

        <a href='https://brandonchung.dev/tag/' className='left-navlink'>Tag</a>
      </div>

      <div className='right-nav'>
        <a href="" className='right-navlink'><i className="fas fa-kiss-wink-heart"></i></a>
        <a href="" className='right-navlink'><i className="fas fa-envelope"></i></a>
        <a href="" className='right-navlink'><i className="fab fa-linkedin"></i></a>
        <a href="" className='right-navlink'><i className="fab fa-github"></i></a>
        <a href="" className='right-navlink'><i className="fab fa-angellist"></i></a>
        {login}
      </div>

    </nav>

  );

};

export default SplashNavbar;