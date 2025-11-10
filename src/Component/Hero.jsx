import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation  } from 'swiper/modules';


 const Hero= () => {
  return (
    <>
      <Swiper 
  modules={[Pagination, Autoplay]}
  spaceBetween={2} 
  slidesPerView={1}              
  loop={true}               
  autoplay={{
    delay: 4000,               
    disableOnInteraction: false,  
    pauseOnMouseEnter: true,     
  }}
  speed={3000}                    
  pagination={{ clickable: true }}
  className="mySwiper"
      >
<SwiperSlide>
  <div
    className="relative overflow-hidden shadow-xl h-[250px] sm:h-[300px] md:h-[450px] lg:h-[550px] bg-cover bg-center flex items-center bg-[url('https://i.ibb.co.com/QjDnWvqS/Screenshot-3.png')]"
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative text-white p-4 md:p-10 max-w-xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
       The right Place Of  <br /> House Finding
      </h2>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl">
       Search and find modern, affordable and <br /> luxury houses in  your favorite locations
      </p>
      <button className="btn hero-button">
        Visit Now
      </button>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    className="relative overflow-hidden shadow-xl h-[250px] sm:h-[300px] md:h-[450px] lg:h-[550px] bg-cover bg-center flex items-center bg-[url('https://i.ibb.co.com/pjFdW6Z2/Screenshot-5.png')]"
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative text-white p-4 md:p-10 max-w-xl">
      <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Find Your Dream <br /> House By Us
      </h2>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl ">
        Your dream home awaits — explore modern  <br /> spaces built  for living.
      </p>
      <button className="btn hero-button">
        Visit Now
      </button>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    className="relative overflow-hidden shadow-xl h-[250px] sm:h-[300px] md:h-[450px] lg:h-[550px] bg-cover bg-center flex items-center bg-[url('https://i.ibb.co.com/tTncBRxX/Screenshot-4.png')]"
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative text-white p-4 md:p-10 max-w-xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Luxury  <br />Residence Here
      </h2>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl ">
       Explore exclusive luxury properties built <br /> with perfectionstyle, and unmatched attention
      </p>
      <button className="btn hero-button">
        Visit Now
      </button>
    </div>
  </div>
</SwiperSlide>

      </Swiper>
    </>
  );
}
export default Hero;