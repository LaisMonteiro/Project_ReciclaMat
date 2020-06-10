import React, { useEffect, useState } from 'react';
import { listPosts } from './../../../services/posts';
import './style.scss';

const PostList = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const handleKindSubmit = (event) => {
    event.preventDefault();
    listPosts(event.target.name).then((res) => setPosts(res));
  };

  useEffect(() => {
    setLoading(true);
    listPosts('produtos').then((res) => {
      setLoading(false);
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
          <small>loading...</small>
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
