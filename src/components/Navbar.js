import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <nav>
        <h3><Link to="/">Chat</Link></h3>
        <div className='right-div'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
  </nav>;
};

export default Navbar;
