import React from 'react'
import './Cover.css'
import CoverImage from '../../Images/musicIcon.svg'

const Cover = () => {
  return (
    <div className='Cover'>
       <img src={CoverImage} alt="Description" />
    </div>
   
  )
}

export default Cover