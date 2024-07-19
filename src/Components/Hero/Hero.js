import React from 'react'
import './Hero.css'
import Profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={Profile_img} alt="Profile image" />
            <h1><span>Lorem ipsum dolor sit</span> amet consectetur adipisicing elit. Ut, veniam!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nisi doloremque fugiat, quia obcaecati vero maxime suscipit doloribus voluptatum esse exercitationem saepe quae dolores, accusamus tenetur blanditiis veritatis corrupti consectetur.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
