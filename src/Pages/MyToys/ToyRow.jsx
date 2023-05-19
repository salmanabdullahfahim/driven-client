import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy, handleDelete }) => {

    const { _id, picture, price, sellerName, toyName, category, availableQuantity } = toy;

  
    return (
        <tr>

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
                <h3>{price} $</h3>

            </td>
            <td>{availableQuantity}</td>
            <td>
                {sellerName}
            </td>
            <td>
                <Link to='/updateToys'> <button className='bg-green-500 rounded p-1 mr-2'>Update</button></Link>
                <button className='bg-red-500  rounded p-1' onClick={() => handleDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default ToyRow;