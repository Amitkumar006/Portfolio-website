import React from 'react'
import './Services.css'
import theme_img from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_img} alt="Theme" />
            </div>
            <div className="services-container">
               {services_data.map((service, index) => {
                 return <div key={index} className="services-formate">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="Arrow Icon" />
                    </div>
                  </div>
               })}
            </div>
        </div>
    )
}

export default Services 