import React from 'react'
import { motion } from "framer-motion";

const Works = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.2,
      delay: 0,
    }}
      className='outlet-container'>Works</motion.div>
  )
}

export default Works