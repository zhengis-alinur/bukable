import React, {useContext, useState} from 'react'
import './TalentCard.scss'
import Button from './Button';
import {TalentContext} from '../contexts/context'

const TalentCard = (props) => {

    const {currentTalent, setTalent} = useContext(TalentContext)
    const {showProfile, setShowProfile} = useContext(TalentContext)

    const [select, setSelect] = useState(props.select)
    const toggleSelect = () => {
        setSelect(!select);
    }
    const toggleTalent = (e) => {
        if(e.target.id !== 'marked') {
            setTalent(props);
            window.scrollTo(0,0);
            setShowProfile(true);
        }
    }
    return (
        <div className='talent-card' onClick={toggleTalent}>
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
                        <Button icon={'assets/zap.png'} class={props.available ? 'small secondary':'small warning'} text={props.available ? 'Available':'Unavailable'}/>
                    </div>
                </div>
            </div>
            <div id="marked" className="marked" onClick={()=>toggleSelect()}>
                <img src={select ? '/assets/selected.png' : '/assets/select.png'} alt=""/>
            </div>
        </div>
    )
}

export default TalentCard