import "./certificate.css";
import ApnaCollegeDSA from "./Certificates/apnaCollegeDSA.png";
import CN_DSA from "./Certificates/CN_DSA.png";
import CN_FE from "./Certificates/CN_FE.png";
import CN_Java from "./Certificates/CN_Java.png";
import KG_Coding_React from "./Certificates/KG_Coding_React.png";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: CN_DSA,
    name: "Data Structures and Algorithms",
    info: (
      <>
        <b>
          Certificate of Excellence in Data Structures and Algorithms (DSA) with
          Java, earned from Coding Ninjas during Job Bootcamp
        </b>
        <br />
        <br />
        <p>
          Recognizes strong skills in solving problems and writing programs
          using Java, gained through intensive training with Coding Ninjas
          during a Job Bootcamp.
        </p>
      </>
    ),
    way:'https://drive.google.com/file/d/1uWWnSslr9L6_L32NEa-UiXAdNh864mYQ/view?usp=sharing'
  },
  {
    id: 2,
    avatar: CN_FE,
    name: "Frontend Development",
    info: (
      <>
        <b>
          Certificate of Excellence in Frontend Development, earned from Coding
          Ninjas during the Job Bootcamp
        </b>
        <br />
        <br />
        <p>
          Celebrates expertise in building websites and web applications with
          HTML, CSS, JavaScript, and Bootstrap, acquired through focused
          learning at Coding Ninjas during a Job Bootcamp.
        </p>
      </>
    ),
    way:'https://drive.google.com/file/d/1SaxLA-HXeHp2ZI0JvNZztLzqHIhh5whe/view?usp=sharing'
  },

  {
    id: 3,
    avatar: KG_Coding_React,
    name: "React Js",
    info: (
      <>
        <b>Certificate of Completion in React.js, obtained from KG Coding</b>
        <br />
        <br />
        <p>
          Marks successful completion of a course in React.js, demonstrating
          proficiency in building dynamic and interactive user interfaces for
          web applications, learned through KG Coding.
        </p>
      </>
    ),
    way:'https://drive.google.com/file/d/1zDyHU9p7nGRDyABofqJDbQGkpt36S6e1/view?usp=sharing'
  },
  {
    id: 4,
    avatar: CN_Java,
    name: "Java",
    info: (
      <>
        <b>
          Certificate of Excellence in Java Programming, earned from Coding
          Ninjas during the Job Bootcamp
        </b>
        <br />
        <br />
        <p>
          Acknowledges completion of a course in Java programming, indicating
          proficiency in writing Java code, learned through structured lessons
          at Coding Ninjas
        </p>
      </>
    ),
    way:'https://drive.google.com/file/d/1knXGLYHs9wk50PHZMpEnwoYkvQ4oG61W/view?usp=sharing'
  },
  {
    id: 5,
    avatar: ApnaCollegeDSA,
    name: "Data Structures and Algorithms",
    info: (
      <>
        <b>
          Certificate of Completion in Data Structures and Algorithms (DSA),
          obtained from Apna College
        </b>
        <br />
        <br />
        <p>
          Demonstrates proficiency in problem-solving and algorithmic thinking,
          acquired through structured learning at Apna College&apos;s
          comprehensive course in Data Structures and Algorithms (Sigma Batch)
        </p>
      </>
    ),
    way:'https://drive.google.com/file/d/1hNB4IizwKf771uhZ8rqSaTZmNBb3XGPj/view?usp=sharing'
  },
];

const Testimonials = () => {
  return (
    <section id="certificates">
      <h5>Review from Clients</h5>
      <h2>Certificates</h2>

      <Swiper
        className="container certificate_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, info, way }) => {
          return (
            <SwiperSlide key={id} className="certificate">
              <div className="certificate_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="certificate_name">{name}</h5>
              <small className="certificate_info"> {info}</small>
              <a href={way} target="_blank"><h6 className="viewCertificate">View Certificate</h6></a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
