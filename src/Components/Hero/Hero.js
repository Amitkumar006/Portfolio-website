import React from 'react';
import './Hero.css';
import Profile_img from '../../assets/profile image.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typewriter from 'typewriter-effect';

const Hero = (props) => {

    return (
        <div id='home' className='hero'>
            <img src={Profile_img} alt="Profile image" />
            <div className='container-typing'>
                <Typewriter
                    options={{
                        strings: ['Hi, My name is Amit Kumar.', 'I am a Web Developer.'],
                        autoStart: true,
                        loop: true,
                        delay : 100,
                        cursor : '|'
                    }}
                />
            </div>
            <p>
                Recent B.Tech graduate specializing in frontend development with expertise in HTML, CSS, JavaScript, and React. Experienced in creating responsive, user-friendly web applications. Proven ability to contribute effectively to dynamic tech teams. Eager to further expand skills and contribute to achieving project objectives.
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect With Me
                    </AnchorLink>
                </div>
                <div className="hero-resume" onClick={props.handleClick}>
                    {props.isPdfVisible === true ? 'Close Resume' : 'My Resume'}
                </div>
            </div>
        </div>
    );
};

export default Hero;

