import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1>RECICLAMAT</h1>
        <Link to="/signIn">Entrar</Link>
      </nav>
    </div>
  );
};

export default Navbar;
