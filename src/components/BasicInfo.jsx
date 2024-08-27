import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function BasicInfo() {
  return (
    <>

      <div className='basic-info'>
        <h2>Basic Information</h2>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="text" placeholder="Enter name" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Phone Number">
          <Form.Control type="" placeholder="Enter phone number" />
        </FloatingLabel>
      </div >

    </>
  );
}

export default BasicInfo;
