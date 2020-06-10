import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1>RECICLAMAT</h1>
<<<<<<< HEAD
        <p>
          <Link to="/signIn">Entrar</Link>
        </p>
=======
        <Link to="/signIn">Entrar</Link>
>>>>>>> f162c2325d09e85af630be96ee06d185bff6b245
      </nav>
    </div>
  );
};

export default Navbar;
