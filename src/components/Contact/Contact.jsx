/* eslint-disable no-unused-vars */
import React from 'react'
import {assets} from '../../assets/assets'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState('');

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult('Sending....');
      const formData = new FormData(event.target);

      formData.append('access_key', 'fe944135-549c-48d9-b308-066deff6145e');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={assets.msgIcon} alt="" /> </h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={assets.mailIcon} alt="" />contact@gmail.com</li>
                <li><img src={assets.phoneIcon} alt="" />+1 123-456-7890</li>
                <li><img src={assets.locationIcon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label >Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button className='btn dark-btn' type='submit'>
                    Submit now <img src={assets.whiteArrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact