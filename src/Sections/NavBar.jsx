import React from 'react'
import './NavBar.scss'
import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as NotifyIcon} from '../assets/notification.svg';
import {ReactComponent as SelectIcon} from '../assets/select.svg';

const NavBar = () => {
    const profileImg = '/assets/profile-image.png'
    return (
    <div className='nav-bar'>
        <div className="logo">
            <Logo/>
        </div>
        <div className="menu">
            <NotifyIcon/>
            <div className="select">
                <img src={profileImg} alt="profile image" className="profile-img" />
                <SelectIcon/>
            </div>
        </div>
    </div>
    )
}

export default NavBar