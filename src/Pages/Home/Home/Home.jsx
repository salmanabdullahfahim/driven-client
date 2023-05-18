import React from 'react';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Gallery></Gallery>
            <Stats></Stats>
        </div>
    );
};

export default Home;