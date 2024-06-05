import { FaGithub, FaInstagramSquare,FaLinkedin  } from "react-icons/fa";


const HeaderSocial = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/" target="_blank">
        <FaLinkedin />
        </a>
        <a href="https://github.com/" target="_blank">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/spam_sudesh/" target="_blank">
        <FaInstagramSquare />
        </a>
      
    </div>
  )
}

export default HeaderSocial
