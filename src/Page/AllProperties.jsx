import React, { useEffect, useState } from 'react';
import AllpropertyCard from '../Component/AllpropertyCard';

const AllProperties = () => {
    const [products, setProducts] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
}, []);
    return (
        <div>
    <div className="container mx-auto px-4 py-15">
    <div className='text-center pb-8'>
        <h1 className='text-[var(--color-text)] text-4xl font-bold mb-2'>All Properties</h1>
        <p className='text-base font-semibold text-black/60 mb-2'>Thousands of luxury home enthusiasts just like you <br />visit our website.</p>
    </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
     products.map(product => <AllpropertyCard key={product._id} product={product}/>)
    
    }
    </div>
    </div>
        </div>
    );
};

export default AllProperties;