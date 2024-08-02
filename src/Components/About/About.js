import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import linkdin_icon from '../../assets/linkedin.svg'

const About = () => {
    return (
        <>
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Theme" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello, My name is Amit kumar. I'm a Software developer. I've done a lot of projects like Ecommerce, Portfolio etc.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>NAME</p>
                        <p>:</p>
                        <p>AMIT KUMAR</p>
                    </div>
                    <div className="about-skill">
                        <p>EMAIL</p>
                        <p>:</p>
                        <p>amitkumarprajapat.ak@gmail.com</p>
                    </div>
                    <div className="about-skill">
                        <p>DATE OF BIRTH</p>
                        <p>:</p>
                        <p>1 Aug 2002</p>
                    </div>
                    <div className="about-skill">
                        <p>PHONE</p>
                        <p>:</p>
                        <p>+91 8107431817</p>
                    </div>
                    <div className="about-skill">
                        <p>ADDRESS</p>
                        <p>:</p>
                        <p>PILANI, RAJASTHAN</p>
                    </div>
                    <p className='about-para'>For more details, check here.</p>
                </div>


                <div className="linkdin-button">
                    <a href="https://www.linkedin.com/in/amit-kumar-a84892202/" target='_blank'>
                        <div className="linkdin" >

                            <img src={linkdin_icon} alt="Linkdin" />
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div className="go-up">
            
        </div>
        </>
    )
}

export default About
