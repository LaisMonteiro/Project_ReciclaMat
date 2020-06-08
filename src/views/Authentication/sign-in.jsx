import React, { useState } from 'react';
import './sign.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const AuthenticationSignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const { email, password } = formData;
    const data = new FormData();

    data.append('email', email);
    data.append('password', password);

    axios
      .post('http://localhost:3010/api/authentication/sign-in', data)
      .then((user) =>
       console.log('logar', user))  
      .catch((error) => console.log(error));
  }

  return (
    <div className="signs">
      <Form onSubmit={handleSubmitForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="name"
            id="name"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleInputChange}
          />
        </Form.Group>
        {/*         <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button id="button" size="md" block variant="primary" type="submit">
          Sign in
        </Button>
        <small>
          Not a member?{' '}
          <a id="links" href="/signup">
            Sign up!
          </a>
        </small>
      </Form>
    </div>
  );
};
export default AuthenticationSignIn;
