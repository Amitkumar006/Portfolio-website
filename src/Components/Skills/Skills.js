import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import skills_img from '../../assets/About_profile.png'

const skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className="skills-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="Theme" />
            </div>
            <div className="skills-sections">
            <div className="skills-left">
                    <div className="skills-para">
                        <p>Learning to create responsive and dynamic websites using HTML, CSS, and JavaScript. Gaining experience with frameworks like React.</p>
                        <p>Passionate about creating user-friendly designs with a focus on usability and aesthetics. Learning and working with tools like Figma. </p>
                    </div>
                    <div className="skills-skills">
                        <div className="skills-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                        <div className="skills-skill"><p>Javascript</p><hr style={{width:"30%"}}/></div>
                        <div className="skills-skill"><p>Bootstrap</p><hr style={{width:"50%"}}/></div>
                        <div className="skills-skill"><p>React JS</p><hr style={{width:"30%"}}/></div>
                        <div className="skills-skill"><p>Figma</p><hr style={{width:"40%"}}/></div>
                    </div>
                </div>
                <div className="skills-right">
                    <img src={skills_img} alt="skills Image" />
                </div>
               
            </div>
            <div className="skills-achievements">
                <div className="skills-achievement">
                    <h1>0</h1>
                    <p>YEAR OF EXPERINCE</p>
                </div>
                <hr />
                <div className="skills-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLITED</p>
                </div>
                <hr />
                <div className="skills-achievement">
                    <h1>0</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default skills
