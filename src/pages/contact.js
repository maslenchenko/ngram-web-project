import React, {useRef} from 'react'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (e.target.email.value.length === 0 || e.target.topic.value.length === 0 || e.target.message.value.length === 0) {
            toast.error("Please fill in all the fields.");
            return;
        }

        emailjs.sendForm('service_wmqy5vj', 'template_ioh2mxg',
            form.current, 'NZqxe7-X83cSUXeNZ')
            .then((result) => {
                console.log(result.text);
                toast.success("Your message has been sent. We will contact you soon.");
            }, (error) => {
                console.log(error.text);
                toast.error("Your message has not been sent. Please try again later.");
            });
        e.target.reset();
    };

    return (
        <div className='contact-main'>
            <h1 className='contact-title'>Still have some questions?</h1>
            <h2 className='contact-subtitle'>Don't hesitate to ask us!</h2>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div className="contact-input">
                    <input type='email' name='email' placeholder='Your email...'/>
                </div>
                <div className="contact-input">
                    <input className="contact-input" type='text' name='topic' placeholder='Topic...'/>
                </div>
                <div className='question'>
                    <textarea className="question-area" name='message' placeholder='Your question...'></textarea>
                    <button className="send-button" type='submit'>Send</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Contact
