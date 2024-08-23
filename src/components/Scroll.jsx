import React, { useEffect } from 'react';
import './Scroll.css';

function Scroll() {
  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('.parallax-section');

      sections.forEach((section, index) => {
        const speed = -0.4; 
        const offset = (scrollPosition - section.offsetTop) * speed;
        section.style.backgroundPositionY = `${offset}px`;
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <section className="parallax-section" id="section1"></section>
      <section className="parallax-section" id="section2"></section>
      <section className="parallax-section" id="section3"></section>
    </div>
  );
}

export default Scroll;
