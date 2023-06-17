import "./style/Contact.scss"

import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <div className="Contact">
      <div className="title">
        <h1>CONTACT</h1>
        <h2>Get in Touch!</h2>
      </div>
      <ContactForm/>
    </div>
  )
}

export default Contact