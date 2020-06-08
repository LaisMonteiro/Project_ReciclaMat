import React from 'react';
import './sign.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const AuthenticationSignIn = () => {
  return (
    <div className="signs">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
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
