import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';

//CRIAR CONDICIONAL, SE OWNER, VER OPCAO DE EDITAR PERFIL.

const Profile = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setLoading(true);
    axios
      .get('http://localhost:3010/api/users')
      .then((data) => {
        setData(data.data.user);
        setLoading(false);
        console.log(data.data.user);
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
            <div className="box" key={user._id}>
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

        <button className="delete">Delete</button>
      </div>
    </div>
  );
};
export default Profile;
