import React from 'react'
import {useRef} from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wmqy5vj', 'template_ioh2mxg',
     form.current, 'NZqxe7-X83cSUXeNZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='contact-main'>
      <h1 className='contact-title'>Still have some questions?</h1>
      <h2 className='contact-subtitle'>Don't hesitate to ask us!</h2>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <div className="contact-input">
        <input type='email' name='email' placeholder='Your email...' />
      </div>
      <div className="contact-input">
        <input className="contact-input" type='text' name='topic' placeholder='Topic...' />
      </div>
      <div className='question'>
        <textarea className="question-area" name='message' placeholder='Your question...'></textarea>
        <button className="send-button" type='submit'>Send</button>
      </div>
      </form>
    </div>
  )
}

export default Contact
