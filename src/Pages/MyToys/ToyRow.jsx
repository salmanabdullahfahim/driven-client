import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy, handleDelete }) => {

    const { _id, picture, price, sellerName, toyName, category, availableQuantity } = toy;

  
    return (
        <tr className=''>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="badge badge-ghost badge-sm">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <h3 className='text-center'>{price} $</h3>

            </td>
            <td className='text-center'>{availableQuantity}</td>
            <td>
                {sellerName}
            </td>
            <td>
                <Link to={`/updateToys/${_id}`}> <button className='bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mr-2'>Update</button></Link>

                <button className='bg-red-500 hover:bg-red-600 text-white font-semibold rounded p-2' onClick={() => handleDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default ToyRow;