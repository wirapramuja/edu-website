/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'

import './Testimonials.css'
import { assets } from '../../assets/assets'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0
    

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }
    const slideBackward = () => {
        if (tx < 0) {
          tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }



  return (
    <div className="testimonials">
      <img
        src={assets.nextIcon}
        className="next-btn"
        alt=""
        onClick={slideForward}
      />
      <img
        src={assets.backIcon}
        onClick={slideBackward}
        className="back-btn"
        alt=""
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user1} alt="" />
                <div>
                  <h3>Emma Heart</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user3} alt="" />
                <div>
                  <h3>Kyle Hermes</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user4} alt="" />
                <div>
                  <h3>Frank William</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials