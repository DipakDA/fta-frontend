import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function CreateProfileForm() {
  return (
    <Form style={{ maxWidth: '800px', margin: '20px auto' }}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label style={{ color: 'black', fontSize: '20px' }}>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDOB">
            <Form.Label style={{ color: 'black', fontSize: '20px' }}>Date of birth</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label style={{ color: 'black', fontSize: '20px' }}>City/Town</Form.Label>
            <Form.Control type="text" placeholder="Enter city or town" />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label style={{ color: 'black', fontSize: '20px' }}>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMobile">
            <Form.Label style={{ color: 'black', fontSize: '20px' }}>Mobile number</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formOccupation">
            <Form.Label style={{ color: 'black', fontSize: '20px' }}>Occupation</Form.Label>
            <Form.Control type="text" placeholder="Enter current occupation" />
          </Form.Group>

        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateProfileForm;