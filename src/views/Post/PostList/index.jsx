import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { listPosts } from '../../../services/posts';

const PostList = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const handleKindSubmit = (event) => {
    event.preventDefault();
    listPosts(event.target.name).then((res) => setPosts(res));
  };

  useEffect(() => {
    setLoading(true);
    listPosts().then((res) => {
      setLoading(false);
      console.log(res)
      setPosts(res);
    });
  }, []);

  return (
    <div className="social-container">
      <div className="buttons-container">
        <button onClick={handleKindSubmit} name="produtos">
          Produtos
        </button>
        <button className="donate-btn" onClick={handleKindSubmit} name="doar">
          Doando
        </button>
        <button onClick={handleKindSubmit} name="receber">
          Recebendo
        </button>
      </div>
      <div>
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          posts.map((post) => {
            return (
              <div key={post._id} className="social-post">
                <div className="photo-name-post">
                  <img
                    src={post.userCreator.avatar}
                    alt=""
                    className="user-image"
                  />
                  <p className="post-creator">{post.userCreator.name}</p>
                </div>
                <img src={post.image} alt="" className="post-image" />
                <small>{post.kind}</small>
                <p className="post-description">{post.description}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default PostList;
