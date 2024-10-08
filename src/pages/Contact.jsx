import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 


    console.log('Form submitted:', formData);

  
    alert('Message sent!');

   
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };


  return (
    <section className="contact content-wrapper">
      <div className="contact-wrapper">
        <div>
          <ul>My Email: mkeeney4202@gmail.com</ul>
          <br />
          <ul>My Github: mkeeney42</ul>
          <br />
          <ul>My Phone Number: (304)-634-9055 </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" className="inputs" required onChange={handleChange}/>

          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" className="inputs" required onChange={handleChange}/>

          </div>
          <div className="input-wrapper">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" className="inputs" rows="4" required onChange={handleChange}></textarea>

          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact