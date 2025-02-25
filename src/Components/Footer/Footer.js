import React from 'react'
import './Footer.css'
import theme_img from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        <div className="footer-title">
                <h1>Amit Kumar</h1>
                <img src={theme_img} alt="Theme image" />
            </div>
            <p>Thank you for visiting my portfolio! Let's stay connected. For inquiries or collaborations, don't hesitate to reach out.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="User Icon" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Amit Kumar. All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
