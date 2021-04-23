import Form from "react-bootstrap/Form";
import React from "react";
import Col from "react-bootstrap/Col";
import { useProductsContext } from "./Context";
import Button from "react-bootstrap/Button";

const Experience = ({ item }) => {
  const {
    changeExperienceInfo,
    removeExperience,
    addExperienceInfo,
  } = useProductsContext();
  const { id, start_time, end_time, company, city, tasks, title } = item;

  return (
    <div className='personal-info experience' key={id}>
      <div className='btn-container'>
        <h5>
          Experience(<strong>{parseInt(id) + 1}</strong>)
        </h5>
        <Button
          variant='link'
          data-id={id}
          className='edu-btn'
          onClick={() => {
            addExperienceInfo();
          }}
        >
          Add
        </Button>
        <Button
          variant='link'
          data-id={id}
          className='edu-btn'
          onClick={(e) => {
            removeExperience(parseInt(e.target.dataset.id));
          }}
        >
          Remove
        </Button>
      </div>
      <Form>
        <Form.Row>
          <Col>
            <Form.Label>company</Form.Label>
            <Form.Control
              placeholder='Amazon'
              name='company'
              data-id={id}
              value={company}
              onChange={(e) => {
                changeExperienceInfo({
                  id: parseInt(e.target.dataset.id),
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder='Sr. Product Manager'
              name='title'
              data-id={id}
              value={title}
              onChange={(e) => {
                changeExperienceInfo({
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
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              placeholder='June-2015'
              name='start_time'
              data-id={id}
              value={start_time}
              onChange={(e) => {
                changeExperienceInfo({
                  id: parseInt(e.target.dataset.id),
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Label>End Time</Form.Label>
            <Form.Control
              placeholder='June-2020'
              name='end_time'
              data-id={id}
              value={end_time}
              onChange={(e) => {
                changeExperienceInfo({
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
              placeholder='Seattle,WA'
              data-id={id}
              name='city'
              value={city}
              onChange={(e) => {
                changeExperienceInfo({
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
              rows={5}
              data-id={id}
              placeholder='taskes'
              name='tasks'
              value={tasks}
              onChange={(e) => {
                changeExperienceInfo({
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

export default Experience;
