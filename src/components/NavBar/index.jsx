import React from 'react';
import './style.scss';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div>
          <Navbar.Brand className="color-a-nav" href="/">
            RECICLAMAT
          </Navbar.Brand>
        </div>
        <div>
          {/* configurar o botao de ENTRAR (abaixo) quando o Authentication estiver pronto */}
          {/* <Link to="/signIn">Entrar</Link> */}
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/posts">Home</NavDropdown.Item>
                <NavDropdown.Item href="/profile/:id">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/post/add">Add Materials</NavDropdown.Item>
                <NavDropdown.Item href="/search">Search Materials</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Sign out</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
