import React from 'react';
import './styles.scss';
// import { Card } from 'react-bootstrap';

const Social = () => {
  return (
    <div className="social-container">
      {/* for para cada post */}
      <div className="social-post">
        <div className="photo-name-post">
          <img
            src="https://images.unsplash.com/photo-1582805661675-44eb8920a653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            alt=""
            className="user-image"
          />
          <p className="post-creator">User name</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1535837487710-a191373a20ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
          alt=""
          className="post-image"
        ></img>
        <p className="post-description">description</p>
      </div>
      {/*       <Card style={{ width: '18rem' }}>
      <div className="photo-name-post">
          <img
            src="https://images.unsplash.com/photo-1582805661675-44eb8920a653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            alt=""
            className="user-image"
          />
          <p className="post-creator">User name</p>
        </div>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1535837487710-a191373a20ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Social;
