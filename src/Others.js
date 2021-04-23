import Form from "react-bootstrap/Form";
import React from "react";
import Col from "react-bootstrap/Col";
import { useProductsContext } from "./Context";
import Button from "react-bootstrap/Button";

const Others = ({ item }) => {
  const { changeOtherInfo, removeOther, addOtherInfo } = useProductsContext();
  const { id, content } = item;

  return (
    <div className='personal-info others' key={id}>
      <h5>
        Others(<strong>{parseInt(id) + 1}</strong>)
      </h5>
      <Button
        variant='link'
        data-id={id}
        className='edu-btn'
        onClick={() => {
          addOtherInfo();
        }}
      >
        Add
      </Button>
      <Button
        variant='link'
        data-id={id}
        className='edu-btn'
        onClick={(e) => {
          removeOther(parseInt(e.target.dataset.id));
        }}
      >
        Remove
      </Button>
      <Form>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            data-id={id}
            placeholder='content'
            name='content'
            value={content}
            onChange={(e) => {
              changeOtherInfo({
                id: parseInt(e.target.dataset.id),
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

export default Others;
