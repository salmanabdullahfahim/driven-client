import React from 'react';
import { ArrowUpRight } from 'lucide-react'
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/useTitle';

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ToyDetails = () => {

    UseTitle('Toy Details')
    const toy = useLoaderData();


    const { toyName, category, price, availableQuantity, sellerName, picture, details, sellerEmail, rating } = toy

    return (
        <section className="overflow-hidden">
            <div className="mx-auto max-w-5xl px-5 py-24">
                <div className="mx-auto flex flex-wrap items-center lg:w-full">
                    <img
                        alt=""
                        className="h-64 w-full rounded object-cover lg:h-11/12 lg:w-full"
                        src={picture}
                    />
                    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">

                        <h1 className="my-4 text-3xl font-semibold text-black">{toyName}</h1>
                        <div className="my-4 flex items-center">
                            <span className="flex items-center space-x-1">
                                <span className="title-font text-xl font-bold text-gray-900">${price}</span>

                            </span>
                        </div>
                        <p className="leading-relaxed">
                            {details}
                        </p>
                        <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                            <div className="">
                                <h2 className="mr-3 text-sm font-semibold bg-gray-100 rounded-lg p-2">Seller: {sellerName}
                                </h2> <br />
                                <span className="mr-3 text-sm font-semibold bg-gray-100 rounded-lg p-2">Email: {sellerEmail}
                                </span>

                            </div>
                            <div className="ml-auto flex items-center">
                                <span className="mr-3 text-sm font-semibold">Available Quantity: {availableQuantity}
                                </span>

                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className='flex gap-2 items-center'>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating}
                                    readOnly
                                ></Rating>

                                <span className="ml-3 inline-block text-xs font-semibold">{rating}</span>
                            </div>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;





