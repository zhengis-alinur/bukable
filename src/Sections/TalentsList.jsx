 import React, {useContext, useState}from 'react'
import './TalentsList.scss'
import {TalentContext} from '../contexts/context'
import TalentCard from '../components/TalentCard'

const TalentsList = (props) => {
  const {showProfile, setShowProfile} = useContext(TalentContext);
  const [show, setshow] = useState(window.innerWidth > 1200 && showProfile ? true : false)
  return (
    <div className='talents-list' style={{display: window.innerWidth < 1200 && showProfile ? 'none': 'block'}}>
        <div className="search-wrapper">
        </div>
        <div className="cards">
          {props.talents.map((el) => <TalentCard {...el}/>)}
        </div>
    </div>
  )
}

export default TalentsList