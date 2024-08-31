import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function BasicInfo() {
  return (
    <>

      <div className='basic-info'>
        <h2>Basic Information</h2>
        <FloatingLabel controlId="floatingSelect" label="Category" className="mb-3">
          <Form.Select aria-label="Select a Category" defaultValue="">
            <option value="" disabled></option>
            <option value="1">Hair Cut</option>
            <option value="2">Shaving</option>
            <option value="3">Hair Styleing</option>
            <option value="4">Beard Trim</option>
          </Form.Select>
        </FloatingLabel>


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
