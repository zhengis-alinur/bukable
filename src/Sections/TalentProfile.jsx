import React, {useContext} from 'react'
import './TalentProfile.scss'
import Button from '../components/Button'
import TalentContext from '../contexts/context'

const TalentProfile = () => {
  const {currentTalent, setTalent} = useContext(TalentContext)

  return (
    <div className='talent-profile'>
      <div className="header">
        <img src={currentTalent.img} alt="" className="profile-image" />
        <div className="info-wrapper">
          <p className="name">current is {currentTalent.name}</p>
          <p className="caption">props.caption</p>
          <div className="buttons">
            <Button text='Connect' class='big primary'/>
            <Button text={currentTalent.hours+' hrs/week'} class='big grey'/>
            <Button icon='/assets/zap.png' text={currentTalent.available ? 'Available' : 'Unavailable'} class={`big + ${currentTalent.available ? 'secondary' : 'warning'}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalentProfile