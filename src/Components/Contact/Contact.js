import React from 'react'
import './Contact.css'
import theme_img from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_img} alt="Theme image" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta doloremque asperiores omnis quasi beatae non!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                           <img src={mail_icon} alt="Mail icon" /> <p>amitkumarprajapat.ak@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <img src={call_icon} alt="call icon" /> <p>+91 8107431817</p>
                        </div>
                        <div className="contact-detail">
                        <img src={location_icon} alt="location icon" /> <p>Jaipur, Rajasthan, India </p>
                        </div>
                    </div>

                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Enter your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
