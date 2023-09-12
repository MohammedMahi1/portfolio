import React from 'react'
import { motion } from "framer-motion";
import MM from "../imgs/Mm-Profile.jpg"
import { Link } from 'react-router-dom';
import { BiLogoLinkedin, BiLogoInstagram } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
const About = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: 0,
      }}
      className='outlet-container-content'>
      <div className='profile '>
        <div className='pr-profile'>
          <span className='info-text-header'>
            <li>About me</li>
          </span>
          <h1>It's Mohammed Mahi</h1>
          <br />

          <p className='info-text'>
            I'm a full-stack web developer, and I'm here to introduce myself.
            My skill set covers the essentials of web development: <u>HTML</u>, <u>CSS</u>, and <u>JavaScript</u>, which I use to create <u>user-friendly</u> and responsive front-end interfaces.
          </p>
          <br />
          <p className='info-text'>
            On the backend, I'm well-versed in <u>PHP</u>, enabling me to build powerful server-side applications that connect seamlessly with databases.
            Additionally, I bring <u>Python</u> into the mix, using its flexibility to develop various web solutions and <u>data-driven</u> applications.
          </p>
          <br />
          <p className='info-text'>
            My commitment to staying updated with the latest trends and technologies ensures that the solutions I provide are both cutting-edge and practical.
            Feel free to explore my portfolio and witness firsthand how I bring together HTML, CSS, JavaScript, PHP, and Python to create engaging digital experiences.
          </p>
        </div>
      </div>
      <div className='paper'>
        <img src={MM} alt="" />
      </div>
      <div className='profile '>
        <div className='pr-profile'>
          <h1>More about me</h1>
          <br />

          <p className='info-text'>I'm experienced in collaborative teamwork within agile frameworks, ensuring efficient communication and seamless coordination among team members.</p>
          <br />
          <p className='info-text'>Furthermore, my expertise extends to DevOps practices, including GitLab, which I use to streamline development workflows and enhance project efficiency.</p>
        </div>
      </div>
      <div className='paper-footer'>
        <div className='footer'>
        <span className='info-text-header'>
            <li>Follow me</li>
          </span>
          <div className='footer-contents'>
            <Link>
            <BiLogoLinkedin/>
            </Link>
            <Link>
            <BiLogoInstagram/>
            </Link>
            <Link>
            <FiGithub/>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About