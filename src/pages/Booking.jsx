import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './Booking.css';
import img2 from '../Images/haircut.jpg';
import Services from '../components/Services';
import SocialMedia from './SocialMedia';
import Appointment from '../components/Appointment';
import Cres from '../components/Cres';

function Booking() {
  const [showHeader, setShowHeader] = useState(true);
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // show and hide header
      if (scrollPosition < lastScrollY || scrollPosition === 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      // Show SocialMedia after 600px
      if (scrollPosition > 600) {
        setShowSocialMedia(true);
      } else {
        setShowSocialMedia(false);
      }

      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className={`header-container ${showHeader ? 'visible' : 'hidden'}`}>
        <Header />
      </div>

      <div className="row pb-5 pt-5">
        <div className="col-lg-6 col-sm-12 column-right d-flex justify-content-center align-items-center">
          <h1>
            Best Custom Barbering Solutions For The Modern <span>Man.</span>
          </h1>
        </div>
        <div className="col-lg-6 column-left col-sm-12 pt-4">
          <div className="row gx-0">
            <div className="col-4 shape green"></div>
            <div className="col-4 shape navy flower"></div>
            <div className="col-4"></div>

            <div className="col-12 image-container">
              <img src={img2} alt="no image" />
            </div>

            <div className="col-4 shape navy-bottom"></div>
            <div className="col-4 shape purple"></div>
            <div className="col-4 shape blue"></div>
          </div>
        </div>
      </div>

      <Services />

      <Appointment />

      {showSocialMedia && (
        <div className="social-media-fixed animate-icon">
          <SocialMedia />
        </div>
      )}

      <Cres />
    </>
  );
}

export default Booking;
