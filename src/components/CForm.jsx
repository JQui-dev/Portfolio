import emailjs from '@emailjs/browser';

import "./style/CForm.scss"

function CForm() {

  const sendMsg = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m1hxrab', 'template_c4zp9tq', e.target, '8f8ZQWGWsnvc8CVp8')

    e.target.reset();
  };

  return (
    <form onSubmit={sendMsg} className='CForm'>

      {/* NAME AND EMAIL */}
      <div className="middle">
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name' required/>
        </div>

        <div className="email">
          <label htmlFor="name">Email:</label>
          <input type="email" id='email' name='email' required/>
        </div>
      </div>

      <div className="msg">
        <label htmlFor="message">Message:</label>
        <textarea placeholder='Make sure to be clear, please!' type="text" id='message' name='message' required/>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default CForm