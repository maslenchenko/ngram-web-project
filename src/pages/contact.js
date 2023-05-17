import React from 'react'
import ContactInput from '../components/contact-input.js'
import QuestionInput from '../components/question-input.js'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='contact-main'>
      <h1 className='contact-title'>Still have some questions?</h1>
      <h2 className='contact-subtitle'>Don't hesitate to ask us!</h2>
      <ContactInput text="Your email..." />
      <ContactInput text="Topic..." />
      <QuestionInput text="Your question..." />
    </div>
  )
}

export default Contact
