
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

const About = () => {
    return (
        <div className='h-96 relative '>
          <div>
              <h2 className='text-4xl text-center p-4 font-bold'>Projects</h2>
          </div>
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
        <SwiperSlide>
            <div className='bg-gray-300 rounded-lg p-3'>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-60 w-full ease-out duration-1000" src={img1} alt="" />
                </div>
                <div className='flex flex-cols-2 gap-5'>
                  <button className="bg-red-600 px-4 py-1 mt-3 rounded-md">Live Site</button>
                  <button className="bg-green-600 px-4 py-1 mt-3 rounded-md">Github</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img2} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img3} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img4} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img5} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img6} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img7} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img8} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img10} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img12} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="relative overflow-hidden rounded-lg">
                    <img className=" object-cover object-top hover:object-bottom h-80 w-full ease-out duration-1000" src={img13} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, repellendus voluptatem optio voluptates facilis quam natus dolorem quis esse.</p>
                <button className="bg-blue-600 px-4 py-2 rounded-md">More</button>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default About;