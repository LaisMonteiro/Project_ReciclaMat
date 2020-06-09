import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1>RECICLAMAT</h1>
        <p><Link to="/signup">Entrar</Link></p>
      </nav>
    </div>
  );
};

export default Navbar;
