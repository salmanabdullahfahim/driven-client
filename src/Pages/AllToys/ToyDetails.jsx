import React from 'react';
import { ArrowUpRight } from 'lucide-react'
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const toy = useLoaderData();


    const { toyName, category, price, availableQuantity, sellerName, picture, details, sellerEmail, rating } = toy

    return (
        <div className='mx-auto my-24'>
            <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row mx-auto">
                <div className="h-full w-full md:h-[200px] md:w-[300px]">
                    <img
                        src={picture}
                        alt="Laptop"
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
                <div>
                    <div className="p-4">
                        <h1 className="inline-flex items-center text-lg font-semibold">
                            {toyName}<ArrowUpRight className="ml-2 h-4 w-4" />
                        </h1>
                        <p className="mt-3 text-sm text-gray-600">
                            {details}
                        </p>
                        <div className="mt-4">
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                Price: {price}
                            </span>
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                Available Quantity: {availableQuantity}
                            </span>
                           
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                           
                            <span className="flex flex-col">
                                <span className="text-[10px] font-medium text-gray-900">Seller: {sellerName}</span>
                                <span className="text-[8px] font-medium text-gray-500">Email: {sellerEmail}</span>
                            </span>
                            <span>
                                {rating}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;



