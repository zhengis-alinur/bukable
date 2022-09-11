import React from 'react'
import './TalentCard.scss'
import Button from './Button';

const TalentCard = (props) => {
  return (
    <div className='talent-card'>
        <img src={props.img} alt="talent" className='talent-img'/>
        <div className="about">
            <div className="name">
                <p>{props.name}</p>
                {props.isMarked ? <img src="assets/mark.png" alt="" /> : ''}
            </div>
            <div className='location-wrapper'>
                <img src="assets/map-pin.png" alt="" />
                <p className="location">{props.location}</p>
            </div>
            <div className="job">
                <p>{props.specialization} - <span className='company'>{props.company}</span></p>
            </div>
            <div className="access-info">
                <div className="hours-info">
                    <Button icon={'assets/clock.png'} class={'small grey'} text={props.hours+' hrs/week'}/>
                </div>
                <div className="hours-info">
                    <Button icon={'assets/zap.png'} class={props.available ? 'small green':'small red'} text={props.available ? 'Available':'Unavailable'}/>
                </div>
            </div>
        </div>
        <div className="marked">
            <img src={props.select ? '/assets/selected.png' : '/assets/select.png'} alt=""/>
        </div>
    </div>
  )
}

export default TalentCard