import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

//CRIAR CONDICIONAL, SE OWNER, VER OPCAO DE EDITAR PERFIL.

const Profile = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setLoading(true);
    axios
      .get('')
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => fetchData(), []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((user) => {
          return (
            <div className="box">
              <img src={user.avatar} alt="" />
              <div>
                <h5>{user.name}</h5>
                <small>Contact: {user.email}</small>
                <button className="edit">Edit</button>
              </div>
            </div>
          );
        })
      )}

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
