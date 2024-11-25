
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CoverflowCarousel = () => { 
    return ( 
    <Swiper
      effect={'coverflow'}
      grabCursor={true} 
      centeredSlides={true} 
      loop={true} 
      slidesPerView={3} 
      coverflowEffect={{ rotate:0, stretch:-90, depth:350,modifier:0.7,slideShadows:false}} 
      pagination={{ el:'.swiper-pagination' , clickable: true }} 
      slideShadows={true}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable: true
      }} 
      modules={[EffectCoverflow, Pagination, Navigation]} 
      className='swiper-container' > 
      <SwiperSlide className='swpire-slide'> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:228' alt='Slide 1' />
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.25.46%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:302' alt='Slide 2' /> 
      </SwiperSlide> 
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/0168ad0b-5280-4be9-a8d7-b1ce26880481.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:337' alt='Slide 1' />
      </SwiperSlide> 
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/81962e3b-69a6-40ed-ab82-dbacbd0c37b4%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:302' alt='Slide 4' /> 
      </SwiperSlide> 
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.18%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:264' alt='Slide 5' /> 
      </SwiperSlide> 
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.19%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:302' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2019.59.08_cae3be81.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:679' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.06.55%20PM.jpeg/:/rs=w:403,h:302' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.06.55%20PM%20(1).jpeg/:/rs=w:1209,h:907' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.18%20PM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1209,h:605' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2019.56.43_6bfcfe46.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1209,h:1209' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202023-03-20%20at%2008.21.13%20(18).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1209,h:907' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/31fd881b-32f5-4a3c-b953-1b6b002cf881.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1209,h:907' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/25d832b5-e817-429c-a9d9-f723d738fde7.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1209,h:907' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/blob-bb16e11.png/:/cr=t:21.91%25,l:21.91%25,w:56.18%25,h:56.18%25/rs=w:806,h:806' alt='Slide 6' /> 
      </SwiperSlide>
      
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/e8c22d59-d752-4874-b627-9caddadc36fc.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1209,h:680' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/d023117d-d3e9-4493-a373-e057f29e72f5.jpg/:/rs=w:403,h:302' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/b3bb26cc-5808-4ed7-b165-f57016544231%20(2).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:302' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/0168ad0b-5280-4be9-a8d7-b1ce26880481.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:337' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/81962e3b-69a6-40ed-ab82-dbacbd0c37b4%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:302' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:228' alt='Slide 6' /> 
      </SwiperSlide>
      <SwiperSlide> 
        <img src='https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.18%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,h:264' alt='Slide 6' /> 
      </SwiperSlide>

      <div className="slider-nav"> 

        <div className="swiper-button-prev slider-arrow arrow"> 
        
        </div> 
        <div className="swiper-button-next slider-arrow arrow"> 
        </div> 
        <div className="swiper-pagination"></div> 
      </div> 
    </Swiper> 
    ); 
}; 
export default CoverflowCarousel;
//// <icon-icon name='arrow-back-outline'></icon-icon> 
// <icon-icon className="icon-icon" name='arrow-forward-outline'></icon-icon>