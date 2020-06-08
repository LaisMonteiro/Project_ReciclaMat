import React from 'react';
import './sign.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const AuthenticationSignUp = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Control type="text" placeholder="Normal text" />
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group>
      </Form>
      <Button id="button" size="md" block variant="primary" type="submit">
        Sign up
      </Button>
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
