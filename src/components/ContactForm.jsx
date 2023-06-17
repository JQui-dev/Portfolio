import React from 'react'
import "./style/ContactForm.scss"

import CForm from "./../components/CForm"

function ContactForm() {
  return (
    <div className='ContactForm'>
        <img src="/assets/svg/contact.svg" alt="contact image"/>
        <CForm/>
    </div>
  )
}

export default ContactForm