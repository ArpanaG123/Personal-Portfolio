import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'

const Home = () => {
  return (
    <div>
        <div class = "sdiv">
            <div class = "one">
                <div id = "name1">Hi, I am Arpana kashyap</div>
                <div id = "role">A Front-end Developer</div>
                <div id = "note">Get ready to turn ideas into reality</div>
                <NavLink to='/contact' className="button1">Hire Me</NavLink>
                <a href = "https://drive.google.com/file/d/1atrshTQoaJUzEsVvzU1qLYhxYFZHVVIR/view?usp=share_link" target="blank" className='button2'>Get Resume</a>
                
            </div>
            <div class = "two">
                <img src = './Images/Banner1.png' alt = '' className='img1' />
            </div>
        </div>
        <section class = "banner">
            <svg class = "waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path 
                fill="#18978F" fill-opacity="1" d="M0,64L34.3,90.7C68.6,117,137,171,206,197.3C274.3,224,343,224,411,202.7C480,181,549,139,617,122.7C685.7,107,754,117,823,133.3C891.4,149,960,171,1029,186.7C1097.1,203,1166,213,1234,197.3C1302.9,181,1371,139,1406,117.3L1440,96L1440,320L1405.7,320C1371.4,320,
                1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </section>
    </div>
  )
}

export default Home