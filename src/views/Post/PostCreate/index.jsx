import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const PostView = () => {
  return (
    <div>
      <h1>Create a post</h1>
      <div className="mb-2">
        <Button className="post-add-buttons" variant="success">
          Products
        </Button>{' '}
        <Button className="post-add-buttons" variant="success">
          Donate
        </Button>{' '}
        <Button className="post-add-buttons" variant="success">
          {' '}
          Receive
        </Button>{' '}
        <br />
      </div>
      <p>
        <strong>Select your location </strong>
      </p>

      
      <Button id="button" size="md" block variant="primary" type="submit">
        Post
      </Button>
    </div>
  );
};
export default PostView;
