import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useProductsContext } from "./Context";
const Personal = () => {
  const { personal, changePersonalInfo } = useProductsContext();
  const { first_name, last_name, phone, title, email, address } = personal;
  return (
    <div className='personal-info'>
      <h4>Personal Information</h4>
      <Form>
        <Form.Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder='First name'
              name='first_name'
              value={first_name}
              onChange={(e) => {
                changePersonalInfo({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder='Last name' />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder='Mr. Ms. or Dr.' />
          </Col>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='email' />
          </Col>
        </Form.Row>

        <Form.Group controlId='formGridAddress'>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder='City and State' type='address' />
        </Form.Group>
        <Form.Group controlId='formGridAddress'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder='9999999999' type='number' />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Personal;
