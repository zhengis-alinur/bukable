import React, {useContext, useState} from 'react'
import './TalentProfile.scss'
import Button from '../components/Button'
import {TalentContext} from '../contexts/context'
import EducationCard from './EducationCard'
import ExperienceCard from './ExperienceCard'

const TalentProfile = () => {
  const {currentTalent, setTalent} = useContext(TalentContext)
  const {showProfile, setShowProfile} = useContext(TalentContext);
  const [select, setSelect] = useState(currentTalent.select)
  
  const toggleSelect = () => {
      setSelect(!select);
  }

  const closeProfile = () => {
    setShowProfile(false);
  }

  return (
    <div className='talent-profile' style={{display: showProfile ? 'flex': 'none'}}>
      <p className='back-arrow' onClick={()=>closeProfile()}>➜</p>
      <div className="header">
        <img src={currentTalent.img} alt="" className="profile-image" />
        <div className="info-wrapper">
          <div className="name">
            <p>{currentTalent.name}</p>
            {currentTalent.isMarked ? <img src="assets/mark.png" alt="" /> : ''}
          </div>
          <p className="caption">Traditional/Digital Artist passionate about Art</p>
          <div className="buttons">
            <Button text='Connect' class='big primary'/>
            <Button text={currentTalent.hours+' hrs/week'} class='big grey'/>
            <Button icon='/assets/zap.png' text={currentTalent.available ? 'Available' : 'Unavailable'} class={`big + ${currentTalent.available ? 'secondary' : 'warning'}`}/>
          </div>
          <div className="location-wrapper">
            <img src="assets/map-pin.png" alt="" />
            <p className='location'>{currentTalent.location}</p>
            <p className='join-info'>Joined 5 month ago</p>
          </div>
        </div>
        <div className="marked" onClick={()=>toggleSelect()}>
          <img src={currentTalent.select ? '/assets/selected.png' : '/assets/select.png'} alt=""/>
        </div>
      </div>
      <div className="prof-info">
        <div className="section about">
          <h2 className='title'>About</h2>
          <p className='about-text'>I am a full-time student at Full Sail University to pursue a bachelor's degree in Computer Animation. I am a loving wife and fur mom. I have graduated from TVCC in the year of 2020 with an Associate's of Arts Degree. I graduated from Mabank High School in the year of 2018. I am very passionate in art and want to pursue it as a way of making a living for family. I am a hard worker whom is willing to do anything for my husband and my fur-daughter.</p>
        </div>
        <hr/>
        <div className="section education">
          <h2 className='title'>Education</h2>
          <EducationCard 
            img='assets/London.png' 
            speciality='Msc, Computer Animation ' 
            university='University of London • Class of 2023'/>
            <hr />
          <EducationCard 
            img='assets/spbu.png' 
            speciality='Computanional physics' 
            university='Saint Petersburg State University • Class of 2020'/>
        </div>
        <hr/>
        <div className="section experience">
          <h2 className='title'>Experience</h2>
          <ExperienceCard 
            img='assets/google.png' 
            speciality='Marketing Intern' 
            company='Google • Los Angeles, USA (Remote)'
            period='Sep 2021 - Present • 6 months'
            child={
              <>
                <ul>
                  <li>Increase user base on Instagram from 1500 followers to 2200 followers.</li>
                  <li>Create Reels and TikToks to engage students in events that reached over 31,000 views</li>
                  <li>Film and edit videos to enhance our social media presence and capture the student’s attention</li>
                </ul>

                <p>Skills : Adobe Premiere Pro, Final Cut pro, Canva, and Short form editing for TikTok</p>
              </>
            }
            />
          <hr />
          <ExperienceCard 
            img='assets/sberbank.png' 
            speciality='Marketing Intern' 
            company='Google • Los Angeles, USA (Remote)'
            period='Sep 2021 - Present • 6 months'
            child={
              <>
                <ul>
                  <li>Increase user base on Instagram from 1500 followers to 2200 followers.</li>
                  <li>Create Reels and TikToks to engage students in events that reached over 31,000 views</li>
                  <li>Film and edit videos to enhance our social media presence and capture the student’s attention</li>
                </ul>

                <p>Skills : Adobe Premiere Pro, Final Cut pro, Canva, and Short form editing for TikTok</p>
              </>
            }
            />
        </div>
        <hr />
        <div className="section skills">
          <h2 className='title'>Skills</h2>
          <div className="skill-buttons">
            <Button text='Social Ad Compaings' class='skill grey'/>
            <Button text='Mobile Ad Compaings' class='skill grey'/>
            <Button text='Short video ads' class='skill grey'/>
            <Button text='Social Media' class='skill grey'/>
            <Button text='After Effects' class='skill grey'/>
            <Button text='Marketing' class='skill grey'/>
          </div>
        </div>
        <hr />
        <div className="section portfolio">
          <h2 className='title'>Portfolio</h2>
          <div className="slides">
            <img className="slide" src="/assets/slide.png" alt="" />
            <img className="slide" src="/assets/slide.png" alt="" />
            <img className="slide" src="/assets/slide.png" alt="" />
            <img className="slide" src="/assets/slide.png" alt="" />
            <img className="slide" src="/assets/slide.png" alt="" />
            <img className="slide" src="/assets/slide.png" alt="" />
            <img className="slide" src="/assets/slide.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalentProfile