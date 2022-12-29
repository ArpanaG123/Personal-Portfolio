import React from 'react'
import './Style.css'

 
const Portfolio = () => {
   return (
    <div class = "section2">
        <h1 className='port'>My Portfolio</h1>
        <div className="line2"></div>
        <div className='Imgdiv1'>
        <a href = 'https://arpanag123.github.io/Project1_BasicsHTML/FirstP.html' target= "blank">
            <div className='divs1'><img  src = './Images/Snip20221023_1.png' alt = '' className='pics1'/></div>
        </a>
        <a href = 'https://arpanag123.github.io/Project2_TODO/Index1.html' target= 'blank' >
            <div className='divs2'>
                <img  src = './Images/Snip20221023_6.png' alt = '' className='pics2'/>
            </div>
        </a>
        <a href = 'https://arpanag123.github.io/Project3-Todo-mobile/Index1.html' target= 'blank' >
            <div className='divs3'>
                <img  src = './Images/snip20221023_7.png' alt = '' className='pics3'/>
            </div>
        </a>
        </div>
        <div className='Imgdiv2'>
        <a href = 'https://arpanag123.github.io/Digital-Clock/Index.html' target= 'blank' >
            <div className='divs4'>
                <img  src = './Images/snip20221023_8.png' alt = '' className='pics4'/>
            </div>
        </a>
        <a href = 'https://arpanag123.github.io/Project5---Todo-App/Index.html' target= 'blank' >
            <div className='divs5'>
                <img  src = './Images/snip20221023_9.png' alt = '' className='pics5'/>
            </div>
        </a>
        <a href = 'https://reactblog-backendapp-deployedversion.netlify.app/' target= 'blank' >
            <div className='divs6'>
                <img  src = './Images/Snip20221023_10.png' alt = '' className='pics6'/>
            </div>
        </a>
        </div>
        
    </div>
   )
}
 
export default Portfolio