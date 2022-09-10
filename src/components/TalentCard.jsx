import React from 'react'
import './TalentCard.scss'

const TalentCard = (props) => {
    console.log(props.name);
  return (
    <div className='talent-card'>
        <img src={props.img} alt="talent image" />
        <div className="about">
            <p className="name">{props.name}</p>
            <p className="location">{props.location}</p>
            <p className="specialization">{props.specialization}</p>
        </div>
        <div className="access-info">
            <div className="hours-info">
                {props.hours}
            </div>
            <div className="hours-info">
                <p>{props.available ? 'Available':'Unavailable'}</p>
            </div>
        </div>
        <div className="marked">
            
        </div>
    </div>
  )
}

export default TalentCard