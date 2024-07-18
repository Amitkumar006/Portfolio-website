import React from 'react'
import './Hero.css'
import Profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={Profile_img} alt="Profile image" />
            <h1><span>Lorem ipsum dolor sit</span> amet consectetur adipisicing elit. Ut, veniam!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nisi doloremque fugiat, quia obcaecati vero maxime suscipit doloribus voluptatum esse exercitationem saepe quae dolores, accusamus tenetur blanditiis veritatis corrupti consectetur.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
