import React from 'react'

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
    <section className="contact">
      <div>
        <ul>My Email: mkeeney4202@gmail.com</ul>
        <ul>My Github: mkeeney42</ul>
        <ul>My Phone Number: (304)-634-9055 </ul>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
  <label htmlFor="name">Your Name</label>
  <input type="text" name="name" className="inputs" required />

  <label htmlFor="email">Your Email</label>
  <input type="email" name="email" className="inputs" required />

  <label htmlFor="message">Your Message</label>
  <textarea name="message" className="inputs" rows="4" required></textarea>

  <button type="submit" className="submit-button">Send Message</button>
</form>
    </section>
  )
}

export default Contact