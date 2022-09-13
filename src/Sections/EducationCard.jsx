import React from 'react'
import './EducationCard.scss'

const EducationCard = (props) => {
  return (
    <div className='education-card'>
        <img src={props.img} alt="unversity" />
        <div className="caption">
            <div className="speciality">{props.speciality}</div>
            <div className="university-name">{props.university}</div>
        </div>
    </div>
  )
}

export default EducationCard