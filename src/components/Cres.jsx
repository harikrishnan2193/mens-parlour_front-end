import React from 'react'
import './Cres.css'
import customer1 from '../Images/customer4.jpg'
import customer2 from '../Images/customer3.jpg'
import customer3 from '../Images/customer2.jpg'

function Cres() {
  return (
    <>
        <div className="cres" id='cres'>
            <div className='cres-title-text'>
                <h1>Meet our barbers' crew</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quo repellendus. Optio maxime aliquid cupiditate fugit dicta quam eos reiciendis! Assumenda, quaerat saepe officiis officia inventore et quidem ratione quos!</p>
            </div>
            <div className="cres-row">
                <div className="cres-col">
                <img src={customer1} alt="no image" />
                <div className="user-info">
                    <h4>Hendry Gronman <i class="fa-brands fa-twitter"></i></h4>
                    <p>@hendrygronman</p>
                  </div>
                  <p className='user-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit iste rem adipisci eligendi tempora earum aliquid voluptates officia, voluptatum deleniti minima, voluptas eum impedit magnam inventore nobis. Iusto, sunt.</p>
                </div>
                <div className="cres-col">
                <img src={customer2} alt="no image" />
                <div className="user-info">
                    <h4>Ricky Danial <i class="fa-brands fa-twitter"></i></h4>
                    <p>@rickydanial</p>
                  </div>
                  <p className='user-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit iste rem adipisci eligendi tempora earum aliquid voluptates officia, voluptatum deleniti minima, voluptas eum impedit magnam inventore nobis. Iusto, sunt.</p>
                </div>
                <div className="cres-col">
                <img src={customer3} alt="no image" />
                <div className="user-info">
                    <h4>Marks Lem <i class="fa-brands fa-twitter"></i></h4>
                    <p>@marksLem</p>
                  </div>
                  <p className='user-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit iste rem adipisci eligendi tempora earum aliquid voluptates officia, voluptatum deleniti minima, voluptas eum impedit magnam inventore nobis. Iusto, sunt.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cres