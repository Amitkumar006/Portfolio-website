import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
       <div className="about-title">
        <h1>About Us</h1>
        <img src={theme_pattern} alt="Theme" />
       </div>
       <div className="about-sections">
        <div className="about-left">
            <img src={about_img} alt="About Image" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nam tempore dolores praesentium alias quibusdam cupiditate,</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius labore, exercitationem esse quam, adipisci aut consequatur fuga culpa temporibus, laborum velit! Alias vero eligendi 
                    
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Bootstrap</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
       </div>
       <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEAR OF EXPERINCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLITED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10</h1>
            <p>HAPPY CLIENTS</p>
        </div>
       </div>
    </div>
  )
}

export default About
