import React from 'react'
import Form from 'react-bootstrap/Form';
type Props = {}

const SwitchButton = (props: Props) => {
  return (
    <Form className='form'>
    <Form.Check 
      type="switch"
      id="custom-switch"
      label="Dark Mode"
    />
  </Form> 
);
}

export default SwitchButton