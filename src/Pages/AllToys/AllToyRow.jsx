import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({ toy }) => {

    const { _id, sellerName, toyName, category, price, availableQuantity, picture } = toy
    return (
        <tr>
            <td>
                <img src={picture} className='w-16 rounded-lg mx-auto' alt="" />
            </td>
            <td>
                <h3 className='text-center'>{sellerName}</h3>

            </td>
            <td>
                <h3 className='text-center'>{toyName}</h3>
            </td>
            <td>
                <h3 className='text-center'>{category}</h3>
            </td>
            <td>
                <h3 className='text-center'>{price}</h3>
            </td>
            <td>
                <h3 className='text-center'>{availableQuantity}</h3>
            </td>
            <td>
                <Link to={`/toyDetails/${_id}`}>
                    <button
                        type="button"
                        className="mt-4 rounded bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        View Details
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToyRow;