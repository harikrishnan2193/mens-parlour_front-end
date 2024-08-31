import React from 'react'
import '../pages/LandingPage.css'
import haircut from '../Images/Haircut child.jpg'
import beardtrim from '../Images/beard1.jpg'
import haircuting from '../Images/haircut.jpg'
import beardShape from '../Images/beardShape.jpg'
import { useLocation } from 'react-router-dom'

function Services() {

  const location = useLocation();
  const isBookingPath = location.pathname === '/booking';

  return (
    <>
      <div className="service mt-5" id='services'>
        <div className='title-text'>
          <p>SERVICES</p>
          <h1>Provide every cut perfect</h1>
        </div>
        <div className="service-box">
          <div className="single-service">
            <img src={haircut} alt="no image" />
            <div className="overlay"></div>
            <div className="service-discription">
              <h3>Hair Cut</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quibusdam voluptates quisquam maxime.</p>
              {isBookingPath &&
                <div className='d-flex justify-content-center align-items-center'>
                  <button type="submit" className="select-btn">BookIn</button>
                </div>
              }
            </div>
          </div>
          <div className="single-service">
            <img src={beardtrim} alt="no image" />
            <div className="overlay"></div>
            <div className="service-discription">
              <h3>Shaving</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quibusdam voluptates quisquam maxime</p>
              {isBookingPath &&
                <div className='d-flex justify-content-center align-items-center'>
                  <button type="submit" className="select-btn">BookIn</button>
                </div>
              }
            </div>
          </div>
          <div className="single-service">
            <img src={haircuting} alt="no image" />
            <div className="overlay"></div>
            <div className="service-discription">
              <h3>Hair Styleing</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quibusdam voluptates quisquam maxime</p>
              {isBookingPath &&
                <div className='d-flex justify-content-center align-items-center'>
                  <button type="submit" className="select-btn">BookIn</button>
                </div>
              }
            </div>
          </div>
          <div className="single-service">
            <img src={beardShape} alt="no image" />
            <div className="overlay"></div>
            <div className="service-discription">
              <h3>Beard Trim</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quibusdam voluptates quisquam maxime</p>
              {isBookingPath &&
                <div className='d-flex justify-content-center align-items-center'>
                  <button type="submit" className="select-btn">BookIn</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services