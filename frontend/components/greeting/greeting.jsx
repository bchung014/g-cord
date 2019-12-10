import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h1>Welcome {currentUser.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </div>
  );

  return display;
};

export default Greeting;