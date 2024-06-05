import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/MainPhoto.jpg'
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I	&apos; m</h5>
        <h1>Sudesh Mhamankar</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>

        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>


        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
