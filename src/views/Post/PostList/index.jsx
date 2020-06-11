import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { listPosts } from './../../../services/posts';
import { addComment } from './../../../services/comment';
import Comment from './../../../components/Comment';

const PostList = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const handleKindSubmit = (event) => {
    event.preventDefault();
    listPosts(event.target.name).then((res) => setPosts(res));
  };

  const receiveComment = (message, postid) => {
    addComment({ message, userCreator: '5ee0eb371457bc1e5cf71e48', post: postid }).then(() => {
      posts.forEach((post) => {
        if (post._id === postid) {
          post.comment.push({ message });
        }
      });
      setPosts([...posts]);
      
    });
  };

  useEffect(() => {
    setLoading(true);
    listPosts().then((res) => {
      setLoading(false);
      console.log(res);
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
                  <img src={post.userCreator.avatar} alt="" className="user-image" />
                  <p className="post-creator">{post.userCreator.name}</p>
                </div>
                <img src={post.image} alt="" className="post-image" />
                <small>{post.kind}</small>
                <p className="post-description">{post.description}</p>
                {post.comment.map((comment) => {
                  return <p key={comment._id}>{comment.message}</p>;
                })}
                <Comment receiveComment={receiveComment} postId={post._id} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default PostList;
