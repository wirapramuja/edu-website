/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu (false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={-100} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-250} duration={500}>Program</Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} duration={500}>About Us</Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>Testimonials</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-100} duration={500}>Contact</Link>
        </li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
      <img src={assets.menuIcon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
