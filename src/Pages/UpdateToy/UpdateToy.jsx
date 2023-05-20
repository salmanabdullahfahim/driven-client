import React from 'react';
import UseTitle from '../../Hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const UpdateToy = () => {
    UseTitle('Update Toy')

    const toy = useLoaderData();

    const { _id, price, availableQuantity, details, toyName } = toy;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const details = form.description.value;


        const toyInfo = {
            price, availableQuantity, details
        }

        fetch(`http://localhost:5000/updateToy/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })

            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.modifiedCount > 0) {

                    form.reset();
                    toast.success('Updated Successfully')
                    Swal.fire(`Updated Successful!, ${toyName} has been updated.`)

                }

            })
            .catch(error => toast.error("Something went wrong"));


    }


    return (
        <>
            <h2 className='text-center text-3xl font-bold mt-6'>Update Toy: {toyName}</h2>
            <div className="w-8/12 mx-auto my-12 border-2 border-gray-600 p-6 md:p-12 rounded">
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-2 '>


                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                                Price:
                            </label>
                            <input
                                type="text"
                                id="price"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='price'
                                defaultValue={price}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                                Available Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='quantity'
                                defaultValue={availableQuantity}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                                Detail Description:
                            </label>
                            <textarea
                                id="description"
                                className="w-full h-36 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='description'
                                defaultValue={details}
                            ></textarea>
                        </div>

                    </div>
                    <div className='text-end'>
                        <button
                            type="submit"
                            className="bg-black hover:bg-black/70 text-white font-bold py-2 px-12 rounded"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateToy;