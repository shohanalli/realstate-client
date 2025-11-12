import { CalendarDays, MapPin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const MyProperty = () => {
    return (
        <div className='bg-[#F5F7FB]'>
           <div className='py-15 w-11/12 md:max-w-9/12 mx-auto'>
        <h1 className='text-[var(--color-text)] text-4xl font-bold mb-2 text-center'>My Property</h1>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-8'>
            {/* card design start */}
            <div className='flex '>
         {/* flex 1 */}
         <div className='relative flex-1 '>
        <img className="h-full w-full rounded-sm object-cover transition-transform duration-500 hover:scale-105" src="https://i.ibb.co.com/qYQcB04r/Screenshot-13.png" alt="" />
        <div className='absolute top-1 left-1'>
        <button className='bg-[var(--primary-color)]/90 text-white py-1 px-4 rounded-2xl text-sm font-semibold'>category</button>
      </div>
        </div>
        {/* flex 2 */}
    <div className='bg-white py-2 flex-1 pl-5 rounded-r-sm rounded-b-sm'> 
    {/* property name */}
      <h2 className='text-[var(--color-text)]/90 text-xl lg:text-2xl font-semibold pb-2 '>propertyName</h2>
      {/* location */}
      <div className=' flex items-center gap-1 text-black/50'>
        <MapPin size={20} />
      <p className='text-sm font-bold '>location</p>
      </div>
      {/* price and post date */}
      <div className="  flex justify-between py-3 items-center">
    <div className=' flex items-center gap-1 text-black/50'>
        <CalendarDays size={16} />
      <p className='text-sm font-bold '>date</p>
      </div>
        <h2 className="text-2xl font-semibold text-[var(--primary-color)]/80 mr-2">price</h2>
      </div>
        {/* button */}
<div className='flex justify-between my-3'>
 <Link to={``} className="cursor-pointer text-[var(--primary-color)]/80 rounded-lg border font-semibold text-sm py-2 px-3 hover:bg-[var(--primary-color)]/90 hover:text-white transition duration-800"> Update</Link>
     <Link to={``} className="mr-2 cursor-pointer text-[var(--primary-color)]/80 rounded-lg border font-semibold text-sm py-2 px-3 hover:bg-[var(--primary-color)]/90 hover:text-white transition duration-800">
          Delete</Link>
</div>
<div>
 <Link to={``} className="block w-10/12 mx-auto text-center cursor-pointer text-[var(--primary-color)]/80 rounded-lg border font-semibold text-sm py-2 px-3 hover:bg-[var(--primary-color)]/90 hover:text-white transition duration-800"> View Details</Link>
</div>
        </div>
            </div>
           </div>
           </div>
        </div>
    );
};

export default MyProperty;