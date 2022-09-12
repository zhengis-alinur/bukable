import React from 'react'
import './TalentsList.scss'
import TalentCard from '../components/TalentCard'

const TalentsList = (props) => {
  return (
    <div className='talents-list'>
        <div className="search-wrapper">
          
        </div>
        <div className="cards">
          {props.talents.map((el) => <TalentCard {...el}/>)}
        </div>
    </div>
  )
}

export default TalentsList