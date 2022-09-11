import React from 'react'
import './SideBar.scss'
import Button from '../components/Button'

const SideBar = () => {
  return (
    <div className='side-bar'>
      <Button class={'create-btn big secondary'} text={'Create'} icon={'/assets/create-icon.png'}/>
      <div className="items">
        <Button text={'Talents'} icon={'/assets/bulk.png'} class={'sidebar-btn active '}/>
        <Button text={'Offers'} icon={'/assets/offers.png'} class={'sidebar-btn'}/>
        <Button text={'Messangers'} icon={'/assets/Chat.png'} class={'sidebar-btn'}/>
        <Button text={'Page'} icon={'/assets/Home.png'} class={'sidebar-btn'}/>
      </div>
      <div className="about">
        <div className="links">
          <a href="https://www.bukable.co/">About</a>
          <a href="https://www.bukable.co/">Privacy</a>
          <a href="https://www.bukable.co/">Support</a>
          <a href="https://www.bukable.co/">More</a>
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