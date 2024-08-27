import React from 'react'
import './SocialMedia.css'
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import twitter from '../Images/twitter.png'
import link from '../Images/link.png'

function SocialMedia() {
    return (
        <>
            <div className="social-media d-flex flex-column align-items-end justify-content-end">
                <div className="icon">
                    <img src={twitter} alt="" />
                    <a target='_blank' href="https://x.com/i/flow/login">
                        <img src={link} alt="" />
                    </a>
                </div>
                <div className="icon">
                    <img src={instagram} alt="" />
                    <a target='_blank' href="https://www.instagram.com/">
                        <img src={link} alt="" />
                    </a>
                </div>
                <div className="icon">
                    <img src={facebook} alt="" />
                    <a target='_blank' href="https://www.facebook.com/">
                        <img src={link} alt="" />
                    </a>
                </div>

            </div>
        </>
    )
}

export default SocialMedia