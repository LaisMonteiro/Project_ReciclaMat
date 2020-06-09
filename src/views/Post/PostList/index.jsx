import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const PostList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setLoading(true);
    axios
      .get('http://localhost:3010/api/post')
      .then((data) => {
        setData(data.data.post);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchKind = () => {
    setLoading(true);
    axios
      .get('http://localhost:3010/api/post')
      .then((result) => {
        console.log(result.data.post);
        // setData(data.filter((typeKind) => typeKind === ))
        // const kind = data.data.post.kind;
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => fetchData(), []);

  return (
    <div>
      <div>
        <button onClick={() => fetchData()}>Produtos</button>
        <button onClick={() => searchKind()}>Doando</button>
        <button>Recebendo</button>
      </div>
      <div>
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          data.map((post) => {
            return (
              <div key={post._id}>
                <img src={post.image} alt="" />
                <li>{post.kind}</li>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default PostList;
