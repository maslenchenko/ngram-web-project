import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-text'>
                <p className='ngram'>N-gram words prediction</p>
                <p className='project'>UCU student project 2023</p>
            </div>
            <div className='footer-contacts'>
                <p className='email'>ngram@gmail.com</p>
                <p className='phone'>+38 000 000 00 00</p>
            </div>
        </div>
    )
}

export default Footer
