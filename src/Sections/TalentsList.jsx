 import React, {useContext, useState}from 'react'
import './TalentsList.scss'
import {TalentContext} from '../contexts/context'
import TalentCard from '../components/TalentCard'

const TalentsList = (props) => {
  const {showProfile, setShowProfile} = useContext(TalentContext);
  const [show, setshow] = useState(window.innerWidth > 1200 && showProfile ? true : false)
  return (
    <div className='talents-list' style={{display: window.innerWidth < 1200 && showProfile ? 'none': 'block'}}>
        <div className="search-bar">
          <div class="search-wrapper">
            <img class="search-icon" src="/assets/search-icon.png" />
            <input class="search" placeholder="Search by name, skill, location, school" type="text" />
          </div> 
          <div class="select-wrapper">
            <select className="select">
              <option value="" disabled selected>Filter Search</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
            </select>
          </div>
        </div>
        <div className="cards">
          {props.talents.map((el) => <TalentCard {...el}/>)}
        </div>
    </div>
  )
}

export default TalentsList