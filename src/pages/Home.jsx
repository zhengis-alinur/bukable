import React from 'react'
import SideBar from '../Sections/SideBar'
import TalentProfile from '../Sections/TalentProfile'
import TalentsList from '../Sections/TalentsList'
import './Home.scss'
const Home = () => {
  return (
    <div className='home page'>
        <SideBar/>
        <TalentsList/>
        <TalentProfile/>
    </div>
  )
}

export default Home