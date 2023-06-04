import "./style/Contact.scss"

import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <div className="Contact">
      <div className="title">
        <h1>Get in Touch!</h1>
      </div>
      <ContactForm/>
    </div>
  )
}

export default Contact