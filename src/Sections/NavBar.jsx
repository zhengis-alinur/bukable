import React, {useContext} from 'react'
import './NavBar.scss'
import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as NotifyIcon} from '../assets/notification.svg';
import {ReactComponent as SelectIcon} from '../assets/select.svg';
import { SideBarContext } from '../contexts/context';

const NavBar = () => {
    const profileImg = '/assets/profile-image.png'
    const {sideBar, setSideBar} = useContext(SideBarContext)
    const toggleSideBar = () => {
        setSideBar(!sideBar);
    }
    return (
    <div className='nav-bar'>
        <img className="burger-menu" src="/assets/burger-menu.png" alt=""  onClick={() => {toggleSideBar()}}/>
        <div className="logo">
            <Logo/>
        </div>
        <div className="menu">
            <NotifyIcon/>
            <div className="select">
                <img src={profileImg} alt="profile" className="profile-img" />
                <SelectIcon/>
            </div>
        </div>
    </div>
    )
}

export default NavBar