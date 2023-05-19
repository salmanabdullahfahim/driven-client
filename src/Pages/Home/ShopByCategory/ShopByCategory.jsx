import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SportsCar from './SportsCar';
import SuvCar from './SuvCar';
import PoliceCar from './PoliceCar';

const ShopByCategory = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <h3 className='text-3xl font-bold text-center my-6'>Shop by category</h3>
            <Tabs>
                <TabList>
                    <Tab>Mini Police Car</Tab>
                    <Tab>SUV Car</Tab>
                    <Tab>Sports Car</Tab>
                </TabList>

                <TabPanel>
                    <PoliceCar></PoliceCar>
                </TabPanel>
                <TabPanel>
                    <SuvCar></SuvCar>
                </TabPanel>
                <TabPanel>
                    <SportsCar></SportsCar>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;