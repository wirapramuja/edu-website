// eslint-disable-next-line no-unused-vars
import React from 'react'

import './Campus.css'
import { assets } from '../../assets/assets'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={assets.gallery1} alt="" />
            <img src={assets.gallery2} alt="" />
            <img src={assets.gallery3} alt="" />
            <img src={assets.gallery4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={assets.whiteArrow} alt="" /></button>
    </div>
  )
}

export default Campus