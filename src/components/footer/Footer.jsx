import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SUDESH</a>
      <ul className="permalinks">
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#certificates">Certificates</a></li>
        <li> <a href="#contact">Contact</a></li> 
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/sudeshmhamankar/" target="_blank" ><FaLinkedin />
</a>
        <a href="https://www.instagram.com/spam_sudesh/" target="_blank" ><FaInstagram />
</a>
        <a href="https://x.com/Sudesh1502" target="_blank" ><FaTwitter />
</a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Sudesh. All rights reserved. 
        </small>
      </div>
    </footer>
  )
}

export default Footer
