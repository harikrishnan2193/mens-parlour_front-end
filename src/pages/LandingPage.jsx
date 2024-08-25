import React, { useEffect } from 'react'
import logo from '../Images/logo.png'
import './LandingPage.css'
import Services from '../components/Services';
import Scroll from '../components/Scroll';
import Cres from '../components/Cres';
import { Link } from 'react-scroll';
import Swal from 'sweetalert2';
import 'animate.css';
import { useNavigate } from 'react-router-dom';


function LandingPage() {

  //for navigat to login page
  const navigate = useNavigate();

  //function for login alert box
  const login = (event) =>{
    //event for prevent the default behavior of anchor tag without removing the "href" attribute
    event.preventDefault();
    Swal.fire({
      title: "Welcome back! Please login to continue your journey.",
      showCancelButton: true,
      confirmButtonText: "Login",
      confirmButtonColor: "rgb(192, 112, 167)", // Custom color for the login button
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login'); 
      }
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const banner = document.querySelector('.banner');
      if (banner) {
        banner.style.backgroundPositionY = `${scrolled * -0.4}px`; 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* section1 */}
       <div className="banner" id='home'>
        <img className='logo' src={logo} alt="no image" />
        <div className="bannerText">
            <h1>Custom Barbering For The Modern Man</h1>
            <p>Expert grooming, premier service, and a shot of confidence. More than just a haircut.</p>
            <div className="banner-btn">
                <a onClick={login} href=""><span></span>Book Now</a>
                <Link to='about' href=""><span></span>Know More</Link>
            </div>
        </div>
       </div>
      {/* section1 */}

      {/* section2 */}
      <div className="side-Nav">
         <button class="btn btn-primary" id='btn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars fa-fade"></i></button>

         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
            <button type="button" class="btn-close mt-3 me-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
           <nav>
             <ul>
               <li><Link to='home'><a data-bs-dismiss="offcanvas" href="">HOME</a></Link></li>
               <li><Link to='about'><a data-bs-dismiss="offcanvas" href="">ABOUT</a></Link></li>
               <li><Link to='services'><a data-bs-dismiss="offcanvas" href="">SERVICES</a></Link></li>
               <li><Link to='cres'><a data-bs-dismiss="offcanvas" href="">OUR CREW</a></Link></li>
               <li><Link to='footer'><a data-bs-dismiss="offcanvas" href="">CONTACT</a></Link></li>
              </ul>
           </nav>
          </div>
         </div>
        </div>
      {/* section2 */}

      {/* section3 */}
      <div className="about-text" id='about'>
          <p>ABOUT</p>
          <h1>It should be an experience</h1>
      </div>
      <div className="row">
        <div className="left-col about-img"></div>
        <div className="right-col">
          <h1>Where men get ready'</h1>
          <p>Our unparalleled team of expert barbers has personal pride riding on each haircut and hot lather shave. No one on Tweed Barbers' staff has been cutting hair fewer than 10 years. We've seen it all and can do it all. We are about substance and skill, not gimmicks. We like to have fun, but we take our work seriously.</p>
        </div>
      </div>
      {/* section3 */}
      
      {/* section4 */}
      <Services/>
      
      {/* section5 */}
      <Scroll/>
      
      {/* section6 */}
      <Cres/>
      
    </>
  )
}

export default LandingPage