import React, {useContext} from 'react'
import './SideBar.scss'
import Button from '../components/Button'
import { SideBarContext } from '../contexts/context';
import DocumentsHolder from '../components/DocumentsHolder';

const SideBar = () => {
  const {sideBar, setSideBar} = useContext(SideBarContext)

  window.addEventListener('resize', () => {
    setSideBar(window.innerWidth > 600 ? true : false)
  })

  return (
    <div className='side-bar' style={{display: sideBar ? 'block' : 'none'}}>
      <Button class={'create-btn big secondary'} text={'Create'} icon={'/assets/create-icon.png'}/>
      <div className="items">
        <Button text={'Talents'} icon={'/assets/bulk.png'} class={'sidebar-btn active '}/>
        <Button text={'Offers'} icon={'/assets/offers.png'} class={'sidebar-btn'}/>
        <Button text={'Messangers'} icon={'/assets/Chat.png'} class={'sidebar-btn'}/>
        <Button text={'Page'} icon={'/assets/Home.png'} class={'sidebar-btn'}/>
      </div>
      <DocumentsHolder/>
    </div>
  )
}

export default SideBar