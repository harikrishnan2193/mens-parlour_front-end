import React, { useState } from 'react';
import './Appoinment.css';
import BasicInfo from './BasicInfo';
import AvilTime from './AvilTime';

function Appointment() {
  const [activeTab, setActiveTab] = useState('basic-info');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='appoint-text'>
        <h1>Get Your Appointment</h1>
        <p className='text-center'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eaque dolor quibusdam harum facilis a, incidunt qui quis aspernatur voluptas mollitia nam dolores fugiat aliquam error provident temporibus ipsum excepturi!
        </p>
      </div>

      <div className="form-container">
        {/* Tab Navigation */}
        <ul className="tabs">
          <li
            className={`tab ${activeTab === 'basic-info' ? 'active' : ''}`}
            onClick={() => handleTabClick('basic-info')}
          >
            Basic Information
          </li>
          <li
            className={`tab ${activeTab === 'available-time' ? 'active' : ''}`}
            onClick={() => handleTabClick('available-time')}
          >
            Available Time
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'basic-info' && <BasicInfo />}
          {activeTab === 'available-time' && <AvilTime />}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn ">Submit</button>
      </div>
    </>
  );
}

export default Appointment;
