import { CalendarDays, HouseHeart, MapPinCheckInside, SmilePlus } from 'lucide-react';
import React from 'react';

const UhyChose = () => {
    return (
        <div className='bg-[#F2F6F7] md:pb-8'>
            <div className='text-center pt-15'>
                <h1 className='text-4xl font-bold text-[var(--color-text)]'>Why Choose Us?</h1>
                <p className='text-[var(--color-text)]/80 p-3 font-semibold text-base '>Here’s just a few reasons why homeowners are choosing Realty to sell their property.</p>
            </div>
        <div className=' container mx-auto px-4 py-15'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <div className=' bg-[#F2695C]/5 rounded-xl h-auto p-7 hover:bg-[#F2695C] transition duration-500 cursor-pointer ease-in-out'>
                   <div className='bg-white inline-block p-2 rounded-2xl shadow-md'>
                     <CalendarDays size={45} color="#F2695C" />
                   </div>
                    <h2 className='text-xl font-bold text-black/80 py-5'>30+ Years of Local Property Experience</h2>
                     <p className='text-[15px] font-semibold line-clamp-3 sm:line-clamp-none text-black/50'> We are not loud, noisy and full of our own self-importance. As your agent we know we work for you.</p>
                </div>
                <div className=' bg-[#F2695C]/5 rounded-xl h-auto p-7 hover:bg-[#F2695C] transition duration-500 cursor-pointer ease-in-out'>
                   <div className='bg-white inline-block p-2 rounded-2xl shadow-md'>
                    
                     <SmilePlus size={45} color="#F2695C" />
                   </div>
                    <h2 className='text-xl font-bold text-black/80 py-5'>We Have <br />
                    Happy Clients</h2>
                     <p className='text-[15px] font-semibold text-black/50 line-clamp-3 sm:line-clamp-none'>Not all agents have the skills or experience to ensure you get the highest price for your property. Our experience is your guarantee of best price.</p>
                </div>
               <div className=' bg-[#F2695C]/5 rounded-xl h-auto p-7 hover:bg-[#F2695C] transition duration-500 cursor-pointer ease-in-out'>
                   <div className='bg-white inline-block p-2 rounded-2xl shadow-md'>
                     <HouseHeart size={45} color="#F2695C" />
                   </div>
                    <h2 className='text-xl font-bold text-black/80 py-5'>We Are not Like Other Agents You Know</h2>
                     <p className='text-[15px] font-semibold text-black/50 line-clamp-3 sm:line-clamp-none'> We are not loud, noisy and full of our own self-importance. As your agent we know we work for you.</p>
                </div>
                <div className=' bg-[#F2695C]/5 rounded-xl h-auto p-7 hover:bg-[#F2695C] transition duration-500 cursor-pointer ease-in-out'>
                   <div className='bg-white inline-block p-2 rounded-2xl shadow-md'>
                     <MapPinCheckInside size={45} color="#F2695C" />
                   </div>
                    <h2 className='text-xl font-bold text-black/80 py-5'>Intimate Local Knowledge</h2>
                    <p className='text-[15px] font-semibold text-black/50 line-clamp-3 sm:line-clamp-none'> that integrate multiple tools seamlessly to provide personalized and highly efficient help</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UhyChose;