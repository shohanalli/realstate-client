import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router';
const AllpropertyCard = ({product}) => {
  console.log(product)
const {_id, postedBy, location, category, price, propertyName, thumbnail } = product    
return (
        <div>
 <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-800 relative cursor-pointer w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[480px]">
<div className="relative h-60 w-full overflow-hidden rounded-lg">
  <img 
    src={thumbnail} 
    alt="Property" 
    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
  />
  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-80 transition-opacity duration-500"></div>
</div>
      <div className='px-3 py-5'>
     {/* category */}
      <div className='absolute top-1 left-1'>
        <button className='bg-[var(--primary-color)]/90 text-white py-1 px-4 rounded-2xl text-sm font-semibold'>{category}</button>
      </div>
      {/* property name */}
      <h2 className='text-[var(--color-text)]/90 text-[18px] lg:text-xl font-semibold pb-4 '>{propertyName}</h2>
      {/* location */}
      <div className=' flex items-center gap-1 text-black/50'>
        <MapPin size={20} />
      <p className='text-sm font-bold '>{
location}</p>
      </div>
      {/* price */}
      <div className="  flex justify-between py-5 items-center">
        <h2 className="text-2xl font-semibold text-[var(--primary-color)]/80">{price}</h2>
        <Link to={`/details/${_id}`} className="cursor-pointer text-[var(--primary-color)]/80 rounded-lg border font-semibold text-sm py-2 px-3 hover:bg-[var(--primary-color)]/90 hover:text-white transition duration-800">
          View Details
        </Link>
      </div>
      <h3 className='text-sm font-semibold text-[var(--color-text)]/60'>Posted by, {
postedBy} </h3>
      </div>
 
    </div>
        </div>
    );
};

export default AllpropertyCard;