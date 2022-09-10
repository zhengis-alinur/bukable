import React from 'react'
import './SideBar.scss'
import Button from '../components/Button'

const SideBar = () => {
  return (
    <div className='side-bar'>
      <Button class={'create-button'} text={'Create'} icon={'/assets/create-icon.png'} type={'base'} />
      <div className="items">
        <Button text={'Talents'} icon={'/assets/bulk.png'} type={'white'}/>
        <Button text={'Offers'} icon={'/assets/offers.png'} type={'transparent'}/>
        <Button text={'Messangers'} icon={'/assets/Chat.png'} type={'transparent'}/>
        <Button text={'Page'} icon={'/assets/Home.png'} type={'transparent'}/>
      </div>
      <div className="about">
        <div className="links">
          <a href="">About</a>
          <a href="">Privacy</a>
          <a href="">Support</a>
          <a href="">More</a>
        </div>
        <div className="downloads">
          <p>Coming soon</p>
          <img src="/assets/apple-logo.png" alt="apple-logo" />
          <img src="/assets/playstore-logo.png" alt="playstore-logo" />
        </div>
        <p className="inc">© 2022 Bukable, Inc. </p>
      </div>
    </div>
  )
}

export default SideBar