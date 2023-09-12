import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { TbSmartHome } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { BsWindow } from 'react-icons/bs';
import { MdOutlineLightMode } from 'react-icons/md';
import { TbSend } from 'react-icons/tb';
import { Tooltip } from '@mui/material';
// import Logo from '../images/mm-logo.svg';
const Index = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='logo'>
          <Tooltip arrow title="Mohammed Mahi">
            {/* <img src={Logo} width={48} alt=""/> */}
            <h2 style={{cursor:"pointer"}}>M.M</h2>
          </Tooltip>
        </div>
        <div className='nav-links'>
          <Tooltip arrow title="home">
            <NavLink to='/' style={{ height: 28 }}><TbSmartHome className='nav-link-icon' /></NavLink>
          </Tooltip>
          <Tooltip arrow title="about">
            <NavLink to='/about' style={{ height: 28 }}><CgProfile className='nav-link-icon' /></NavLink>
          </Tooltip>
          <Tooltip arrow title="projects">
            <NavLink to='/works' style={{ height: 28 }}><BsWindow className='nav-link-icon' /></NavLink>
          </Tooltip>
        </div>
        <div className='nav-modes'>
          <MdOutlineLightMode style={{ cursor: 'pointer' }} />
          <Tooltip arrow title="contact">
            <NavLink to='/contact' className='btn btn-contact-me'><TbSend /> Contact me</NavLink>
          </Tooltip>
        </div>
      </div>
      <div >
        <Outlet />
      </div>
    </div>
  )
}

export default Index