import './learning.css';
import { RiCheckFill } from "react-icons/ri";

const Services = () => {
  return (
    <section id="learning">
      <h5>What I Offer</h5>
      <h2>Learnings</h2>


      <div className="container learning_container">
        <article className='learning'>
          <div className="learning_head">
            <h3>Apna College</h3>
          </div>

          <ul className='learning_list'>
            
            
          <li>
            <RiCheckFill className='learning_icons'/>
            <p>At Apna College, I learned the basics of web development, including HTML, CSS, and JavaScript.</p>
            </li>

            <li>
            <RiCheckFill className='learning_icons'/>
            <p>Additionally, I gained proficiency in Git and GitHub for version control and collaboration.</p>
            </li>

            <li>
            <RiCheckFill className='learning_icons'/>
            <p>Overall, Apna College provided me with a solid foundation to start my journey in the tech industry.</p>
            </li>



          </ul>
        </article>

        {/* END OF UI/UX  */}

        <article className='learning'>
          <div className="learning_head">
            <h3>Coding Ninja&apos; s</h3>
          </div>

          <ul className='learning_list'>
            
            
          <li>
            <RiCheckFill className='learning_icons'/>
            <p>Coding Ninja&apos; s was instrumental in honing my skills in Data Structures and Algorithms (DSA).</p>
            </li>

            <li>
            <RiCheckFill className='learning_icons'/>
            <p>I also deepened my understanding of Object-Oriented Programming (OOP) concepts through their real-world examples and exercises.</p>
            </li>

            <li>
            <RiCheckFill className='learning_icons'/>
            <p>Furthermore, Coding Ninja&apos; s advanced my frontend skills, covering topics in HTML, CSS, JavaScript, and Bootstrap.</p>
            </li>

            <li>
            <RiCheckFill className='learning_icons'/>
            <p>Their skill tests were particularly helpful in reinforcing fundamental concepts and instilling discipline in my learning approach.</p>
            </li>


            <li>
            <RiCheckFill className='learning_icons'/>
            <p>Moreover, Coding Ninja&apos; s introduced me to backend development, covering server-side programming, databases, and APIs.</p>
            </li>

            

            


          </ul>
        </article>



        {/* END OF WEB DEVLOPMENT LIST  */}


        <article className='learning'>
          <div className="learning_head">
            <h3>Youtube Resources</h3>
          </div>

          <ul className='learning_list'>
            
            
          <li>
            <RiCheckFill className='learning_icons'/>
            <p>YouTube channels like Chai Aur Code and KG Coding were invaluable resources for learning React.js.</p>
            </li>

            <li>
            <RiCheckFill className='learning_icons'/>
            <p>Through their tutorials, I gained insights into state management, component lifecycle, and other advanced React.js concepts.</p>
            </li>

            <li>
            <RiCheckFill className='learning_icons'/>
            <p>These channels played a significant role in supplementing my learning journey and provided practical insights into real-world application development.</p>
            </li>


          </ul>
        </article>

        {/* END OF CONTENT CREATION  */}
      </div>
    </section>
  )
}

export default Services;
