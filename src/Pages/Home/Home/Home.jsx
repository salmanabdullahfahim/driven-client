import React from 'react';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Stats></Stats>
        </div>
    );
};

export default Home;