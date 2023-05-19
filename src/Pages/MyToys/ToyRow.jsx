import React from 'react';

const ToyRow = ({toy}) => {

    const {picture,price, sellerName, toyName, category,availableQuantity } = toy
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
                <button className='bg-green-500 rounded p-1 mr-2'>Update</button>
                <button className='bg-red-500  rounded p-1'>Delete</button>
            </td>
        </tr>
    );
};

export default ToyRow;