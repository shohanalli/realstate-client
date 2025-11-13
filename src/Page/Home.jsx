import React from 'react';
import Hero from '../Component/Hero';
import Cards from '../Component/Cards';
import UhyChose from '../Component/UhyChose';
import ClientSay from '../Component/ClientSay';
import MakepropertySec from '../Component/MakepropertySec';
import PropertyAgent from '../Component/PropertyAgent';

const Home = () => {



    return (
        <div>
            <Hero></Hero>
            <Cards></Cards>
            <UhyChose></UhyChose>
            <MakepropertySec></MakepropertySec>
            <PropertyAgent></PropertyAgent>
            <div className=' md:py-10 bg-[#F2F6F7]'>
               <ClientSay></ClientSay>  
            </div>
           
        </div>
    );
};

export default Home;