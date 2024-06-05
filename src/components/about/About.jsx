import "./about.css";
import ME from "../../assets/aboutPhoto.jpg";
import { BsAward } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { RiFolderOpenLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        {/* ------------------- */}
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about-icon" />

              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about_card">
              <HiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>...</small>
            </article>

            <article className="about_card">
              <RiFolderOpenLine className="about-icon" />
              <h5>Projects</h5>
              <small>8+ projects</small>
            </article>
          </div>

          <p>
            I am Sudesh Janardhan Mhamankar from Pune, currently pursuing a
            B.Sc. in Computer Science, now in my third year with a current CGPA
            of 7.9. While my academic journey has provided me with a strong
            foundation in computer science, I have independently developed
            hands-on experience in web development. My technical skill set
            includes HTML, CSS, JavaScript, and React.js, which I use to build
            responsive, visually appealing, and dynamic web pages and
            applications.
          
          <br />
          <br />
          
            As a dedicated frontend developer, I am passionate about creating
            seamless and engaging user experiences. I am actively seeking an
            internship opportunity that will allow me to apply my skills, learn
            from industry professionals, and kick-start my career in web
            development. I am ready to relocate as per the company's
            requirements and am enthusiastic about contributing to innovative
            projects and growing with a dynamic team
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
