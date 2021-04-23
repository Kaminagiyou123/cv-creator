import Form from "react-bootstrap/Form";
import React from "react";
import Col from "react-bootstrap/Col";
import { useProductsContext } from "./Context";
import Button from "react-bootstrap/Button";
const Education = ({ item }) => {
  const {
    changeEducationInfo,
    addEducationInfo,
    removeEducationInfo,
  } = useProductsContext();
  const { id, school, graduation_time, degree, city, tasks } = item;

  return (
    <div className='personal-info education' key={id}>
      <div className='btn-container'>
        <h5>
          Education(<strong>{parseInt(id) + 1}</strong>)
        </h5>
        <Button
          variant='link'
          data-id={id}
          className='edu-btn'
          onClick={() => {
            addEducationInfo();
          }}
        >
          Add
        </Button>
        <Button
          variant='link'
          data-id={id}
          className='edu-btn'
          onClick={(e) => {
            removeEducationInfo(parseInt(e.target.dataset.id));
          }}
        >
          Remove
        </Button>
      </div>
      <Form>
        <Form.Row>
          <Col>
            <Form.Label>School</Form.Label>
            <Form.Control
              placeholder='University of Virginia'
              name='school'
              data-id={id}
              value={school}
              onChange={(e) => {
                changeEducationInfo({
                  id: parseInt(e.target.dataset.id),
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Label>Degree</Form.Label>
            <Form.Control
              placeholder='Business Administration'
              name='degree'
              data-id={id}
              value={degree}
              onChange={(e) => {
                changeEducationInfo({
                  id: parseInt(e.target.dataset.id),
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Label>Graduation Time</Form.Label>
            <Form.Control
              placeholder='2016-07-01'
              name='graduation_time'
              data-id={id}
              value={graduation_time}
              onChange={(e) => {
                changeEducationInfo({
                  id: parseInt(e.target.dataset.id),
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Charlottesville,VA'
              data-id={id}
              name='city'
              value={city}
              onChange={(e) => {
                changeEducationInfo({
                  id: parseInt(e.target.dataset.id),
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
        </Form.Row>

        <Form>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Taskes</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              data-id={id}
              placeholder='taskes'
              name='tasks'
              value={tasks}
              onChange={(e) => {
                changeEducationInfo({
                  id: parseInt(e.target.dataset.id),
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form>
      </Form>
    </div>
  );
};

export default Education;
