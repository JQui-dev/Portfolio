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

      <div className="middle">
        <div className="employment">
          <label htmlFor="for">You need a:</label>
          <div className="select">
            <label htmlFor="freelance">
              <input type="radio" id='freelance' name='employment' value='freelance' required/>
              Freelance
            </label>
            <label htmlFor="employee">
              <input type="radio" id='employee' name='employment' value='employee' required/>
              Employee
            </label>
          </div>
        </div>
        <div className="budget">
          <label htmlFor="budget">Budget:</label>
          <input type="number" id='budget' name='budget' required/>
        </div>
      </div>

      <label htmlFor="message">Message:</label>
      <textarea placeholder='make sure to be clear!' type="text" id='message' name='message' required/>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default CForm