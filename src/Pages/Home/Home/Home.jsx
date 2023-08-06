import React from 'react';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Stats from '../Stats/Stats';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import UseTitle from '../../../Hooks/useTitle';
import ToyCompany from '../ToyCompany/ToyCompany';
import Feedback from '../Feedback/Feedback';
import Apps from '../Apps/Apps';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <ToyCompany></ToyCompany>
            <Feedback></Feedback>
            <Stats></Stats>
            <Apps></Apps>
            
        </div>
    );
};

export default Home;