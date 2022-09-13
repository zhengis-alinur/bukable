import React, {useState} from 'react'
import SideBar from '../Sections/SideBar'
import TalentProfile from '../Sections/TalentProfile'
import TalentsList from '../Sections/TalentsList'
import './Home.scss'
import TalentContext from '../contexts/context'

const Home = () => {
  const data = [
    {
      id:1,
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
      id:2,
      img: '/assets/Attila.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false,
      select: false
    },
    {
      id:3,
      img: '/assets/Nicholas.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false,
      select: true
    },
    {
      id:4,
      img: '/assets/Serena.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false
    },
    {
      id:5,
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
      id:6,
      img: '/assets/Attila.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false
    },
    {
      id:7,
      img: '/assets/Nicholas.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: true
    },
    {
      id:8,
      img: '/assets/Serena.png',
      name: 'Andre Mark',
      location: 'Moscow, Russia',
      specialization: 'Front-End Developer',
      company: 'VTB',
      hours: '10-20',
      available: false
    }
  ]
  let [currentTalent, setTalent] = useState(data[0]);
  let [talents, setTalents] = useState(data);
  return (
    <div className='home page'>
        <SideBar/>
        <TalentContext.Provider value={{currentTalent, setTalent}}>
          <TalentsList talents={talents}/>
          <TalentProfile currentTalent/>
        </TalentContext.Provider>
    </div>
  )
}

export default Home