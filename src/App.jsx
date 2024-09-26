/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VidioPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayerState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayerState={setPlayerState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle={'TESTIMONIALS'} title={'What Student Says'} />
        <Testimonials />
        <Title subTitle={'Contact Us'} title={'Get in Touch'} />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayerState={setPlayerState} />
    </div>
  );
}

export default App