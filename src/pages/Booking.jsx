import React from 'react'
import Header from '../components/Header'
import './Booking.css'
import img2 from '../Images/haircut.jpg'

function Booking() {
  return (
    <>
      <Header />

      <div className="row pb-5">
        <div className="col-lg-6 col-sm-12 column-right d-flex justify-content-center align-items-center">
          <h1>Best Custom Barbering Solutions For The Modern <span>Man.</span></h1>
        </div>
        <div className="col-lg-6 column-left col-sm-12 pt-4">
          <div class="row gx-0">
            <div class="col-4 shape green"></div>
            <div class="col-4 shape navy flower"></div>
            <div class="col-4"></div>

            <div class="col-12 image-container">
              <img src={img2} alt="no image" />
            </div>

            <div class="col-4 shape navy-bottom"></div>
            <div class="col-4 shape purple"></div>
            <div class="col-4 shape blue"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking