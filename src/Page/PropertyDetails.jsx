import { Mail } from 'lucide-react';
import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Authorization/AuthContext';

const PropertyDetails = () => {
    const {user} = use(AuthContext)
     console.log(user)
    const products = useLoaderData()
    const product = products.result
   
    const {thumbnail, shortDescription, propertyName, price, postedBy, mediumDescription, longDescription, location, category} = product
    return (
        <>
        <div className='py-15 w-11/12 md:max-w-9/12 mx-auto'>
            <div className='flex justify-between'>
                <div className='space-y-1'>
                    <h1 className='text-2xl font-bold text-[var(--color-text)]'>{propertyName} <span className='font-normal text-sm text-white bg-[var(--primary-color)] py-1 px-3 rounded-2xl'>{category}</span></h1>
                    <p className='text-sm font-bold text-black/40'>{location}</p>
                </div>
                <div>
                    <p className='text-[var(--primary-color)]/80 font-bold text-3xl'>{price}</p>
                </div>
            </div>
            {/* image */}
            <div className='py-10 w-10/12 mx-auto md:w-9/12'>
                 <img
    className="w-full h-auto object-cover rounded-lg"
    src={thumbnail}
    alt="Property"
  />
            </div>
        </div>

 {/* discription and me */}

<div className='bg-[#F7F7F7] py-15 '>
    <div className='w-11/12  md:flex items-center gap-5 md:max-w-9/12 mx-auto'>
    <div className='md:w-2/3 border mb-5 bg-white shadow-md p-5 rounded-2xl border-black/30'>
        <h1 className='font-bold text-3xl text-black/80 py-4 '>Overview</h1>
<p className='leading-relaxed text-black/60 text-sm pb-8'>{shortDescription}</p>
     <p className='leading-relaxed text-black/60 text-sm pb-8'>{mediumDescription}</p>
<p className='leading-relaxed text-black/60 text-sm pb-8'>{longDescription}</p>
    </div>

    <div className='md:w-1/3  border bg-white shadow-md border border-black/30 rounded-md py-10  flex md:flex-col gap-10 justify-center items-center'>
        <img className='h-30 w-30 rounded-full' src={user.photoURL} alt="" />
        <div>
         <h2 className='text-2xl md:text-xl text-center lg:text-2xl font-bold'>{postedBy}</h2>
            <span className='flex items-center gap-1'>
                <Mail size={16} />
             <p className='text-md md:text-sm lg:text-md font-normal'>{user.email}</p>
            </span>
        </div>
    </div>
    </div>
</div>

    </>
    );
};

export default PropertyDetails;