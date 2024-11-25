import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import FooterSmall from '../FooterSmall';
import { IoChatbox } from "react-icons/io5";
import 'animate.css';

import { FaArrowRight } from "react-icons/fa";
import CoverflowCarousel from '../CoverflowCarousel';
import CarousalInSm from '../CarousalInSm';

function Home() {

  return (
    <>
    <div className='home-bg-con'></div>
    <div className='home-page'>

      <Header/>

      <main className='home-main-section'>
        <h1 className='home-hea1'>Vishal Bharti Senior Secondary School</h1>

        <div className='corousal-con-in-lg'>
          <CoverflowCarousel/>
        </div>
        <div className='corousal-con-in-sm'>
           <CarousalInSm/>
        </div>
        
        <section className='caption-section'>
          <h2 className='home-hea2'>Discover Vishal Bharti Senior Secondary School's Unique Approach to Learning</h2>
          <p className='home-description'>
    
        At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally. That’s why we’ve developed a unique approach to learning that focuses on each student’s individual needs and learning style. Our teachers are dedicated to fostering a supportive and inclusive learning environment, where students are encouraged to explore new ideas and take risks. We offer a wide range of academic and extracurricular programmes that enable our students to build a strong foundation for success.
        </p>
     
        </section>
        
        <section className='school-infrastucture-con-in-lg'>
          <div className='card-item'>
            <img className='card-image' src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/IMG-20240729-WA0007%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:227' alt=''/>
            <div className='card-details-con'>
              <h4 className='card-hea'>Our Computer Lab</h4>
              <p className='card-para'>Our state-of-the-art computer lab is equipped with the latest technology to enhance learning and foster digital literacy.</p>
            </div>
            <button className='arrow-btn'>
               <FaArrowRight className='arrow-icon'/>
            </button>
          </div>
          <div className='card-item'>
            <img className='card-image' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732438826/vecteezy_old-books-on-a-wooden-table-book-stack-in-the-library-room_5930374_tmznzw.jpg' alt=''/>
            <div className='card-details-con'>
              <h4 className='card-hea'>Our Computer Lab</h4>
              <p className='card-para'>Our state-of-the-art computer lab is equipped with the latest technology to enhance learning and foster digital literacy.</p>
            </div>
            <button className='arrow-btn'>
               <FaArrowRight className='arrow-icon'/>
            </button>
          </div>
          <div className='card-item'>
            <img className='card-image' src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.29.13%20PM%20(1).jpeg/:/rs=w:403,h:302' alt=''/>
            <div className='card-details-con'>
              <h4 className='card-hea'>Our Computer Lab</h4>
              <p className='card-para'>Our state-of-the-art computer lab is equipped with the latest technology to enhance learning and foster digital literacy.</p>
            </div>
            <button className='arrow-btn'>
               <FaArrowRight className='arrow-icon'/>
            </button>
          </div>
          <div className='card-item'>
            <img className='card-image' src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-23%20at%2011.15.06%20AM.jpeg/:/rs=w:403,h:302' alt=''/>
            <div className='card-details-con'>
              <h4 className='card-hea'>Our Computer Lab</h4>
              <p className='card-para'>Our state-of-the-art computer lab is equipped with the latest technology to enhance learning and foster digital literacy.</p>
            </div>
            <button className='arrow-btn'>
               <FaArrowRight className='arrow-icon'/>
            </button>
          </div>
          <div className='card-item'>
            <img className='card-image' src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.36%20PM.jpeg/:/rs=w:403,cg:true,m' alt=''/>
            <div className='card-details-con'>
              <h4 className='card-hea'>Our Computer Lab</h4>
              <p className='card-para'>Our state-of-the-art computer lab is equipped with the latest technology to enhance learning and foster digital literacy.</p>
            </div>
            <button className='arrow-btn'>
               <FaArrowRight className='arrow-icon'/>
            </button>
          </div>
          <div className='card-item'>
            <img className='card-image' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732470981/jeffrey-hamilton-jrRe6er0pY0-unsplash_eaagon.jpg' alt=''/>
            <div className='card-details-con'>
              <h4 className='card-hea'>Our Computer Lab</h4>
              <p className='card-para'>Our state-of-the-art computer lab is equipped with the latest technology to enhance learning and foster digital literacy.</p>
            </div>
            <button className='arrow-btn'>
               <FaArrowRight className='arrow-icon'/>
            </button>
          </div>
        </section>
        <div className="marquee-container">
          <div className="marquee"> Registation Open for Admission and Classess in LKG, UKG and I for the Session (2024-2025)</div> 
        </div>
        <div className='chat-con'>
        <IoChatbox className='chat-icon'/>
        </div>
       
      </main> 

      <footer className='footer-con'>
        <div className='footer-in-lg'>
          <Footer/> 
        </div>
        <div className='footer-in-sm'>
          <FooterSmall/>
        </div>
         
      </footer> 
    </div>
  
    </>
  )
}

export default Home
