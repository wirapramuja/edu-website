/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import Video from '../../assets/about.mp4'

import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayerState}) => {
    const player = useRef(null)

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayerState(false)
        }
    }
  return (
    <div onClick={closePlayer} ref={player} className={`video-player ${playState ? '' : 'hide'}`}>
      <video src={Video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer