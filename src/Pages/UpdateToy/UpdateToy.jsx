import React from 'react';
import UseTitle from '../../Hooks/useTitle';

const UpdateToy = () => {
    UseTitle('Update Toy')
    return (
        <>
            <h2 className='text-center text-3xl font-bold mt-6'>Update Toy</h2>
            <div className="w-8/12 mx-auto my-12 border-2 border-gray-600 p-6 md:p-12 rounded">
                <form>
                    <div className='grid grid-cols-2 gap-2 '>

                       
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                                Price:
                            </label>
                            <input
                                type="text"
                                id="price"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                name='price'
                                required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                                Available Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                name='quantity'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                                Detail Description:
                            </label>
                            <textarea
                                id="description"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                name='description'
                                required
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