import React from 'react'
import './Style.css'

const About = () => {
  return (
    <div class = "section1">
            <div class = "tdiv">
                <img src = './Images/Banner1.png' alt = '' className='img2' />
                <div id = "cont1">
                    <div id = "about">About Me</div>
                    <div id = "line"></div>
                    <div id = "web">
                        <p>I'm a web designer & front-end developer with 0.5 years of professional experience. I'm interested in all kinds of visual communication, but my major focus is on designing web. I also have skills in other fields like software testing and currently I'am working as a analyst in TATA CONSULTANCY SERVICES LIMITED.</p>
                        <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me swimming, painting or working out in the park.</p>
                    </div>
                    <div id = "icon">
                        <p id = "p1">Languages/Library/Technology</p>
                        <div class = "ic">
                            <img src = './Img/html@2x.png' alt = '' className='ic1' />
                            <img src = './Img/css@2x.png' alt = '' className='ic2' />
                            <img src = './Img/js@2x.png' alt = '' className='ic3' />
                            <img src = './Img/netlify@2x.png' alt = '' className='ic4' />
                            <img src = './Img/bootstrap.png' alt = '' className='ic5' />
                            <img src = './Img/react-native@2x.png' alt = '' className='ic6' />
                            <img src = './Img/github@2x.png' alt = '' className='ic7' />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About