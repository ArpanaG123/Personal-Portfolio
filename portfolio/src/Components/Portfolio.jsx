import React from 'react'
import './Style.css'
import { details } from '../Details'
import Card from './Card'
 
const Portfolio = () => {
   return (
    <div class = "section2">
        <h1 className='port'>My Portfolio</h1>
        <div className="line2"></div>
        <div className='sectionPort'>
            {
                details.map((value) => {
                    return (
                        <>
                        <Card 
                        image = {value.image}
                        Title1 = {value.Title1}
                        Title2 = {value.Title2}
                        Title3 = {value.Title3}
                        Title4 = {value.Title4}
                        Title5 = {value.Title5}
                        Title6 = {value.Title6}
                        Technology1 = {value.Technology1}
                        Technology2 = {value.Technology2}
                        Technology3 = {value.Technology3}
                        Technology4 = {value.Technology4}
                        Technology5 = {value.Technology5}
                        Technology6 = {value.Technology6}
                        hostUrl1 = {value.hostUrl1}
                        hostUrl2 = {value.hostUrl2}
                        hostUrl3 = {value.hostUrl3}
                        hostUrl4 = {value.hostUrl4}
                        hostUrl5 = {value.hostUrl5}
                        hostUrl6 = {value.hostUrl6}/>

                        </>
                    )
                })
            }

        </div>
        <div className='sectionNew'>
            {
                details.map((value) => {
                    return (
                        <>
                        <Card 
                        image1 = {value.image1}/>
                        </>
                    )
                })
            }

        </div>
    </div>
   )
}
 
export default Portfolio