import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PostProducts = () => {
  return (
    <div>
      <h1>Create your post:</h1>
      <Form>
        <div className="mb-3">
          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Upload the photo</Form.File.Label>
            <Form.File.Input />
          </Form.File>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description of your post: </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button id="button" size="md" block variant="primary" type="submit">
            Post
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default PostProducts;
