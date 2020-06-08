import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

//CRIAR CONDICIONAL, SE OWNER, VER OPCAO DE EDITAR PERFIL.

const Profile = () => {
  return (
    <div>
      <div className="box">
        <h1>IMG</h1>
        <div>
          <h5>Profile's Name</h5>
          <small>Contact:</small>
          <button className="edit">Edit</button>
        </div>
      </div>
      <div>
        <p>My items:</p>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
        </Card>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};
export default Profile;
