import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
const ClientSay = () => {
    return (
    <>
<div className='container mx-auto'>
      <div className='text-center py-10'>
        <h1 className='text-2xl lg:text-4xl font-semibold text-[var(--color-text)]'>What Our Clients Say?</h1>
        <p className='text-base font-bold text-black/40'>Here’s just a few reasons why homeowners are choosing Realty to sell their property.
</p>
    </div>


       <Swiper 
 modules={[Pagination]}
  spaceBetween={20} 
  slidesPerView={2}              
  loop={true}               
  autoplay={{
    delay: 3000,               
    disableOnInteraction: false,  
    pauseOnMouseEnter: true,     
  }}
  speed={3000}                    
  pagination={{ clickable: true }}
  className="mySwiper"
      >

<SwiperSlide>
  <div
    className="mx-3 my-10 relative overflow-hidden border border-black/30 rounded-2xl shadow-xl bg-white bg-cover bg-center flex flex-col items-center justify-center p-5"
  >
    <div>
        <img className="rounded-full border-2 border-[#FF5A3C] h-20 w-20" src={'https://i.ibb.co.com/WND6NWhc/Screenshot-6.png'} alt="" />
    </div>
    <div>
        <p className='text-center mt-2 text-sm md:text-base font-bold text-black/60'>
            working tirelessly at the Boston General Hospital, is developing a new cancer treatment prototype
        </p>
    </div>
    <div className="flex items-center justify-center pt-3 gap-2 mb-2">
        <Rating
         style={{ maxWidth: 120 }}
        value={5}
         />
    </div>
    <h2 className='text-base font-bold'>
        Imran Hossain
    </h2>
    <p className='text-sm'>Baridhara, Dhaka</p>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    className="mx-3 my-10 relative overflow-hidden border border-black/30 rounded-2xl shadow-xl bg-cover bg-center flex flex-col items-center justify-center p-5"
  >
    <div>
        <img className="rounded-full border-2 border-[#FF5A3C] h-20 w-20" src={'https://i.ibb.co.com/FLSGG3wP/testils-3.webp'} alt="" />
    </div>
    <div>
        <p className='text-center mt-2 text-sm md:text-base font-bold text-black/60'>
           an aspiring architect, recently won a prestigious award for her sustainable design proposal.
        </p>
    </div>
    <div className="flex items-center justify-center pt-3 gap-2 mb-2">
        <Rating
         style={{ maxWidth: 120 }}
        value={5}
         />
    </div>
    <h2 className='text-base font-bold'>
        Farhana Rahman
    </h2>
    <p className='text-sm'>Cox’s Bazar</p>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    className="mx-3 my-10 relative overflow-hidden border border-black/30 rounded-2xl shadow-xl bg-cover bg-center flex flex-col items-center justify-center p-5"
  >
    <div>
        <img className="rounded-full border-2 border-[#FF5A3C] h-20 w-20" src={'https://i.ibb.co.com/qLSK6hxq/tesnials-2.webp'} alt="" />
    </div>
    <div>
        <p className='text-center mt-2 text-sm md:text-base font-bold text-black/60'>
           the renowned chef, is opening a new molecular gastronomy restaurant next month.
        </p>
    </div>
    <div className="flex items-center justify-center pt-3 gap-2 mb-2">
        <Rating
         style={{ maxWidth: 120 }}
        value={5}
         />
    </div>
    <h2 className='text-base font-bold'>
        Meem Chowdhury
    </h2>
    <p className='text-sm'>Uttara, Dhaka</p>
  </div>
</SwiperSlide>


      </Swiper>
</div>
    </>
    );
};

export default ClientSay;