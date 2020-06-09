import React, { useState } from 'react';
import './sign.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Dropzone from '../../components/DropZone';

const AuthenticationSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [selectedFile, setSelectedFile] = useState();

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const { name, email, password } = formData;
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    
    if (selectedFile) {
      data.append('avatar', selectedFile);
    }

    axios
      .post('http://localhost:3010/api/users', data)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Form onSubmit={handleSubmitForm}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            onChange={handleInputChange}
          />
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Dropzone onFileUploaded={setSelectedFile} />
        </Form.Group>

        <Button id="button" size="md" block variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
      <small>
        Already a member?{' '}
        <a id="links" href="/signin">
          Sign in!
        </a>
      </small>
    </div>
  );
};
export default AuthenticationSignUp;
