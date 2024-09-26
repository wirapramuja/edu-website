/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import {assets} from '../../assets/assets'

import './About.css'

const About = ({ setPlayerState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={assets.about} alt="" className="about-img" />
        <img src={assets.playIcon} alt="" className="play-icon" onClick={()=> {setPlayerState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goasl and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About