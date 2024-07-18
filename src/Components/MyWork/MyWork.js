import React from 'react'
import './MyWork.css'
import theme_img from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_img} alt="theme image" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
         return <img key={index} src={work.w_img} alt="work image" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  )
}

export default MyWork
