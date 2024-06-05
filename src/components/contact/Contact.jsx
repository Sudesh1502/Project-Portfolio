import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6hcfwse', 'template_clw0h8u', form.current, 'Rroknq4jz965RjFDI')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your Message Has Been Sent Successfully :)')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
      
  };
    return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {/* ==================================== */}
          <article className="contact_option">
          <MdOutlineEmail className="contact_option_icon"/>

            <h4>Email</h4>
            <h6>sudeshmhamankar0909@gmail.com</h6>
            <a href='mailto:sudeshmhamankar0909@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you.' target="_blank">Send a Message</a>
          </article>
          {/* ==================================== */}
          <article className="contact_option">
          <FaLinkedin className="contact_option_icon"/>


            <h4>Linkedin</h4>
            <h5>Sudesh Mhamankar</h5>
            <a href="https://www.linkedin.com/in/sudeshmhamankar/" target="_blank">Send a Message</a>
          </article>
          {/* ==================================== */}
          <article className="contact_option">
          <FaWhatsapp className="contact_option_icon"/>

            <h4>WhatsApp</h4>
            <h5>+91 9561867939</h5>
            <a href="https://api.whatsapp.com/send?phone=9561867939" target="_blank">Send a Message</a>
          </article>
          </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required />

            <textarea name="message" rows={7} placeholder="Your Message" required></textarea>

            <button type="submit" className="btn btn-primary">Send Messag</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
