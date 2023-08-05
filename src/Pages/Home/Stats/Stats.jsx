import React from 'react';
import CountUp from 'react-countup';


const Stats = () => {
    return (
        <div className="pt-12 sm:pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Embraced by more than 4 fresh customers every minute.
                    </h2>
                    <p className="mt-3 text-sm text-gray-500 sm:mt-4">
                        Explore our captivating car toy collection, offering diverse models to suit all preferences. Join our satisfied customers and experience the joy of our trusted website.
                    </p>
                </div>
            </div>
            <div className="mt-10 pb-12 sm:pb-16">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2" />
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-3 bg-gray-100">
                                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                        Genuine Toy
                                    </dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight ">
                                        100%
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                        Seller
                                    </dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight">
                                        <CountUp start={25} end={120} duration={16} separator="," />+
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-gray-100  p-6 text-center sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                        Customer
                                    </dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight ">
                                        <CountUp start={500} end={6000} duration={16} separator="," />
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;