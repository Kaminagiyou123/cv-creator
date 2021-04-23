import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useProductsContext } from "./Context";
const Personal = () => {
  const { personal, changePersonalInfo } = useProductsContext();
  const { first_name, last_name, phone, title, email, address } = personal;
  return (
    <div className='personal-info'>
      <h5>Personal Information</h5>
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
            <Form.Control
              placeholder='Last name'
              name='last_name'
              value={last_name}
              onChange={(e) => {
                changePersonalInfo({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder='Mr. Ms. or Dr.'
              name='title'
              value={title}
              onChange={(e) => {
                changePersonalInfo({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='email'
              name='email'
              value={email}
              onChange={(e) => {
                changePersonalInfo({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
        </Form.Row>

        <Form.Group controlId='formGridAddress'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder='City and State'
            type='address'
            name='address'
            value={address}
            onChange={(e) => {
              changePersonalInfo({
                name: e.target.name,
                value: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId='formGridAddress'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            placeholder='(999)999-9999'
            type='text'
            name='phone'
            value={phone}
            onChange={(e) => {
              changePersonalInfo({
                name: e.target.name,
                value: e.target.value,
              });
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Personal;
