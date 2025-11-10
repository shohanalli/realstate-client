import React from 'react';
import Card from './Card';

const Cards = () => {
    return (
        <div>
 <div className="container mx-auto px-4 py-15">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card></Card>
    </div>
    </div>
        </div>
    );
};

export default Cards;