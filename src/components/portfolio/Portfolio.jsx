import './portfolio.css'
import Mytra from '../../assets/myntra.png'
import Food from '../../assets/Food.jpeg'
import Meal from '../../assets/meal-box.jpeg'
import Social from '../../assets/SocialMedia.jpeg'
import Alarm from '../../assets/alarm.jpeg'
import Whether from '../../assets/whether.jpg'

const data = [

  {
    id:1,
    image:Food,
    title:'Food Ordering App',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: Mytra,
    title: 'Myntra Clone',
    github: 'https://github.com',
    demo: 'https://dribbble.com/ecommerce_template_demo'
  },
  {
    id: 3,
    image: Whether,
    title: 'Weather Forecast App UI',
    github: 'https://github.com',
    demo: 'https://dribbble.com/weather_forecast_app_demo'
  },
  {
    id: 4,
    image: Social,
    title: 'Social Media Application Basic',
    github: 'https://github.com',
    demo: 'https://dribbble.com/project_management_tool_demo'
  },
  {
    id: 5,
    image: Meal,
    title: 'Meal-Box',
    github: 'https://github.com/Sudesh1502/Meal-Box',
    demo: 'https://sudesh1502.github.io/Meal-Box/'
  },
  {
    id: 6,
    image: Alarm,
    title: 'Alarm Clock',
    github: 'https://github.com/Sudesh1502/Alarm-Clock',
    demo: 'https://sudesh1502.github.io/Alarm-Clock/'
  }
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article  key ={id} className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item_cta">
          <a href={github} className='btn' target='_blank'>GitHub</a>
          <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      
        
        
      </div>
    </section>
  )
}

export default Portfolio
