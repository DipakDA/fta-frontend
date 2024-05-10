import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { signUp } from "aws-amplify/auth";

const LoginSignup = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    // Handle the submission logic here
    console.log('Mobile Number:', mobileNumber);

    console.log('Making a backend call');
    let response = await signUp({
      mobileNumber: mobileNumber,
      name: "Dipak Agrawal",
      dob: '19/10/1998'
    });
    console.log("Made backend call");
    console.log(response);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Login or Signup</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number*</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </Form.Group>
            <div className="mb-3">
              By continuing, I agree to the <a href="/terms">Terms of Use</a> &amp; <a href="/privacy">Privacy Policy</a>
            </div>
            <Button variant="primary" type="submit" className="w-100">
              Continue
            </Button>
          </Form>
          <div className="mt-3">
            Have trouble logging in? <a href="/help">Get help</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignup;