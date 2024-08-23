import React from 'react'
import './Footer.css'
import berberGrafic from '../Images/barberGrafic.jpg'

function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <img src={berberGrafic} alt="no image" className='footer-img' />
        <div className='footer-text'>
                <h1>Visit Shope Today</h1>
        </div>
        <div className="footer-row">
          <div className="footer-left">
            <h2>Opening Hours</h2>
            <p><i class="fa-regular fa-clock"></i> Monday to Wednesday - 8am to 9pm PM</p>
            <p><i class="fa-regular fa-clock"></i> Thursday to Friday - 9am to 8pm</p>
            <p><i class="fa-regular fa-clock"></i> Saturday - Closed</p>
          </div>
          <div className="footer-right">
            <h2>Get In Touch</h2>
            <p>#30 abc Town, xyz City IN <i class="fa-solid fa-location-dot"></i></p>
            <p>xyz@gmail.com <i class="fa-regular fa-envelope"></i></p>
            <p>+91 9100000000 <i class="fa-solid fa-phone"></i></p>
          </div>
        </div>
        <div className="icons-contact">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <p>Copyright Blunded Makeup Studio Barber Shope</p>
        </div>
      </div>
    </>
  )
}

export default Footer