import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import './index';

// import SimpleMap from '../../components/Map/SimpleMap';

// form upload de foto
// form description
// boton publicar

const postAdd = () => {
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
          <Button variant="primary" type="submit">
            Post
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default postAdd;
