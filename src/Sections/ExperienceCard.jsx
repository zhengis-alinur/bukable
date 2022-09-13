import React from 'react'
import './ExperienceCard.scss'

const ExperienceCard = (props) => {
  return (
    <div className='experience-card'>
      <div className="info-wrapper">
        <img src={props.img} alt="company" />
        <div className="info">
            <p className="speciality">{props.speciality}</p>
            <p className="company-name">{props.company}</p>
            <p className="period">{props.period}</p>
        </div>
      </div>
        <div className="caption">
          {props.child}
        </div>
    </div>
  )
}

export default ExperienceCard