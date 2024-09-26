/* eslint-disable no-unused-vars */
import React from 'react'
import './Programs.css';
import { assets } from '../../assets/assets';

const Programs = () => {
  return (
    <div className="programs" >
      <div className="program">
        <img src={assets.program1} alt="" />
        <div className="caption">
          <img src={assets.programIcon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={assets.program2} alt="" />
        <div className="caption">
          <img src={assets.programIcon2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={assets.program3} alt="" />
        <div className="caption">
          <img src={assets.programIcon3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
}

export default Programs