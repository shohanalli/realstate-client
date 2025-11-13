import React from 'react';
import Hero from '../Component/Hero';
import Cards from '../Component/Cards';
import UhyChose from '../Component/UhyChose';
import ClientSay from '../Component/ClientSay';
import MakepropertySec from '../Component/MakepropertySec';

const Home = () => {



    return (
        <div>
            <Hero></Hero>
            <Cards></Cards>
            <UhyChose></UhyChose>
            <MakepropertySec></MakepropertySec>
            <div className='container mx-auto md:py-10'>
               <ClientSay></ClientSay>  
            </div>
           
        </div>
    );
};

export default Home;