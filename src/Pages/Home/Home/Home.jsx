import React from 'react';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import UseTitle from '../../../Hooks/useTitle';
import ToyCompany from '../ToyCompany/ToyCompany';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <ToyCompany></ToyCompany>
            <Stats></Stats>
        </div>
    );
};

export default Home;