import React from 'react'
import './TalentsList.scss'
import TalentCard from '../components/TalentCard'

const TalentsList = () => {
  const talents = [
    {
      img: '/assets/Andre.jpg',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      hours: '10-20',
      available: false
    },
    {
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      hours: '10-20',
      available: false
    }
  ]

  return (
    <div className='talents-list'>
        <div className="search-wrapper">
          
        </div>
        <div className="cards">
          {talents.map((el) => <TalentCard {...el}/>)}
        </div>
    </div>
  )
}

export default TalentsList