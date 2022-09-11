import React from 'react'
import './TalentsList.scss'
import TalentCard from '../components/TalentCard'

const TalentsList = () => {
  const talents = [
    {
      img: '/assets/Andre.png',
      name: 'Andre Mark',
      isMarked: true,
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: true,
      select: true
    },
    {
      img: '/assets/Attila.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false
    },
    {
      img: '/assets/Nicholas.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false
    },
    {
      img: '/assets/Serena.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false
    },
    {
      img: '/assets/Andre.png',
      name: 'Andre Mark',
      isMarked: true,
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: true
    },
    {
      img: '/assets/Attila.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false
    },
    {
      img: '/assets/Nicholas.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: true
    },
    {
      img: '/assets/Serena.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
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