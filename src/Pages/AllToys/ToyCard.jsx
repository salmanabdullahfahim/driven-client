import React from 'react';
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {

    const { _id, toyName, category, price, availableQuantity, sellerName, picture } = toy
    return (
        <div className="w-[350px] mx-auto rounded-md border">
            <img
                src={picture}
                alt="Laptop"
                className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                    {toyName} <ArrowUpRight className="ml-2 h-4 w-4" />
                </h1>
                <p className="mt-3 text-sm text-gray-600">
                   Seller: {sellerName}
                </p>
                <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        Category: {category}
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        Price: $ {price}
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        Available Quantity: {availableQuantity}
                    </span>
                </div>
                <Link to={`/toyDetails/${_id}`}>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ToyCard;

