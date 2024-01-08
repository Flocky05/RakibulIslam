
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import img1 from "../../assets/projects/gpt3/bike-down.png"
import img2 from "../../assets/projects/gpt3/coocky.png"
import img3 from "../../assets/projects/gpt3/e-commerce-movie.png"
import img4 from "../../assets/projects/gpt3/ganimy.png"
import img5 from "../../assets/projects/gpt3/gpt-3-demo.netlify.app_(Nest Hub Max).png"
import img6 from "../../assets/projects/gpt3/innox-product.png"
import img7 from "../../assets/projects/gpt3/job-finer-demo01.png"
import img8 from "../../assets/projects/gpt3/programmer.png"
import img10 from "../../assets/projects/gpt3/rakibs-photography.png"
import img11 from "../../assets/projects/gpt3/rohan-television.png"
import img12 from "../../assets/projects/gpt3/tea-house.png"
import img13 from "../../assets/projects/gpt3/travel-tuki-taki.png"

 const images=[img1,img2,img3,img4,img5,img6,img7,img8,img10,img11,img12,img13];
const About = () => {
    return (
        <div className='h-60 relative'>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map(image=><SwiperSlide key={image}>
          <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={image}/>
        </SwiperSlide>)}
        
      </Swiper>
        </div>
    );
};

export default About;