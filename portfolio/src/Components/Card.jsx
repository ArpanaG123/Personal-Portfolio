import React from 'react'
import './Style.css'

const Card = (props) => {
    const {image,image1,Title1,Title2,Title3,Title4,Title5,Title6,Technology1,Technology2,Technology3,Technology4,Technology5,Technology6,hostUrl1,hostUrl2,hostUrl3,hostUrl4,hostUrl5,hostUrl6} = props
  return (
    <>
    <div>
      <img src = {image} alt = '' className='oneP'/>
    </div>
    <div className='proo1'>
      <img src = {image1} alt = ''className='oneT' />
    </div>
    <div className='projectName1'>{Title1}</div>
    <div className='projectName2'>{Title2}</div>
    <div className='projectName3'>{Title3}</div>
    <div className='projectName4'>{Title4}</div>
    <div className='projectName5'>{Title5}</div>
    <div className='projectName6'>{Title6}</div>
    <div className='Tech1'>{Technology1}</div>
    <div className='Tech2'>{Technology2}</div>
    <div className='Tech3'>{Technology3}</div>
    <div className='Tech4'>{Technology4}</div>
    <div className='Tech5'>{Technology5}</div>
    <div className='Tech6'>{Technology6}</div>
    <div className='host1'>{hostUrl1}</div>
    <div className='host2'>{hostUrl2}</div>
    <div className='host3'>{hostUrl3}</div>
    <div className='host4'>{hostUrl4}</div>
    <div className='host5'>{hostUrl5}</div>
    <div className='host6'>{hostUrl6}</div>

    </>
  )
}

export default Card