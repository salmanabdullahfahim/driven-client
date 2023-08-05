import React from 'react';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import UseTitle from '../../../Hooks/useTitle';
import ToyCompany from '../ToyCompany/ToyCompany';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    UseTitle('Home')
    return (
        <div className='bg-white'>
            <Hero></Hero>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <ToyCompany></ToyCompany>
            <Feedback></Feedback>
            <Stats></Stats>
            
        </div>
    );
};

export default Home;