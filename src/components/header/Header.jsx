import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/MainPhoto.jpg'
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      {
      alert("In Projects Section demo links of Myntra, social media application and Whether application are not working as they are not hosted yet, you can visit the repos of all projects using github link. Other all projects are hosted.")
    }
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
