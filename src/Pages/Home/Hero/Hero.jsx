import React from 'react';
import Lottie from "lottie-react";
import heroAnimation from '../../../assets/Hero.json'

const Hero = () => {
    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">

                    <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                        Welcome to Driven..
                    </h1>
                    <p className="mt-8 text-lg text-gray-700">
                        Your Destination for Fun and Excitement on Wheels!
                    </p>
                    <form action="" className="mt-8 flex items-start space-x-2">

                        <div>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Buy Toys
                            </button>
                        </div>
                    </form>
                </div>
                <div className="lg:col-span-5 lg:-mr-8 xl:col-span-6 my-auto mt-12">

                    <Lottie animationData={heroAnimation} />

                </div>
            </div>
        </div>
    );
};

export default Hero;


