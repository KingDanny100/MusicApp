import React from 'react'
import './Cover.css'
import Logo from "../../Images/musicIcon.svg";

const Cover = () => {
  return (
    <div className='cover'>
      <img className='logoimg' src={Logo} alt="music logo" />
      <h2>LaraBuzz</h2>
    </div>
  );
};

export default Cover;