import React, { useState } from 'react'
import Memoji from '../imgs/Hello.png';
import { Tooltip } from '@mui/material';
import {NavLink } from 'react-router-dom';
import { TbSend } from 'react-icons/tb';
import { MdOutlineFileCopy } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { motion } from "framer-motion";
const Home = () => {
  const [copyClipboard, setCopyClipboard] = useState('Copie Email');
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.2,
      delay: 0,
    }}
      className='outlet-container'
    >
      <span className='info-text-header'>
        <li>Full Stack Web Developer</li>
        <NavLink to='/contact' className='available-success'><li>Available For Work</li></NavLink>
      </span>
      <div className='greetings'>
        <div className='res-text-header'>
          <h1> Hi!</h1>
          <h1> I'm Mohammed Mahi</h1>
          <span className='info-text'>
            <div>

              <p className='description'>
                I'm a passionate and skilled full-stack web developer with a strong expertise in both React js and Laravel.
                With a keen eye for user-centric design and a commitment to crafting seamless digital experiences,
                I bring creativity and functionality together to build dynamic and responsive web applications.</p>
            </div>
          </span>
        </div>
        <div className='img-greetings'>
          <img src={Memoji} alt="Memoji" />
        </div>
      </div>
      <div className='nav-modes'>
        <Tooltip arrow title="contact">
          <NavLink to='/contact' className='btn btn-contact-me'><TbSend /> Contact me</NavLink>
        </Tooltip>
        <Tooltip arrow title={copyClipboard}>
          <button onClick={() => {
            navigator.clipboard.writeText('mohammed.mahi012@gmail.com');
            setCopyClipboard('Email has copied');
            setTimeout(() => {
              setCopyClipboard('Copie Email');
            }, 1000)
          }} className='btn btn-copie-email'>
            {
              copyClipboard === 'Email has copied' ? <AiOutlineCheckCircle /> : <MdOutlineFileCopy />
            }
            {copyClipboard}</button>
        </Tooltip>
      </div>
    </motion.div>
  )
}

export default Home