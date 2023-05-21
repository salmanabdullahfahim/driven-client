import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import UseTitle from '../../Hooks/useTitle';

const AddToy = () => {
    UseTitle('Add Toy')

    const { user } = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const picture = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.subCategory.value;
        const availableQuantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const details = form.description.value;

        const toyData = {
            toyName,
            picture,
            price,
            rating,
            category,
            availableQuantity,
            sellerName,
            sellerEmail,
            details
        }

        fetch('https://driven-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                   toast.success('Toy added successfully!!')
                    form.reset();
                }
            })
    }
    return (
        <>
            <h2 className='text-center text-3xl font-bold mt-6'>Add a Toy</h2>
            <div className="w-8/12 mx-auto my-12 border-2 border-gray-600 p-6 md:p-12 rounded">
                <form onSubmit={handleAddToy}>
                    <div className='grid grid-cols-2 gap-2 '>

                        <div className="mb-4">
                            <label htmlFor="toyName" className="block text-gray-700 font-bold mb-2">
                                Toy Name:
                            </label>
                            <input
                                type="text"
                                id="toyName"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='toyName'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="pictureUrl" className="block text-gray-700 font-bold mb-2">
                                Picture URL of the toy:
                            </label>
                            <input
                                type="link"
                                id="pictureUrl"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='photo'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sellerName" className="block text-gray-700 font-bold mb-2">
                                Seller Name:
                            </label>
                            <input
                                type="text"
                                id="sellerName"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='sellerName'
                                defaultValue={user?.displayName}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sellerEmail" className="block text-gray-700 font-bold mb-2">
                                Seller Email:
                            </label>
                            <input
                                type="email"
                                id="sellerEmail"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='sellerEmail'
                                defaultValue={user?.email}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subCategory" className="block text-gray-700 font-bold mb-2">
                                Sub-category:
                            </label>
                            <input
                                type="text"
                                id="subCategory"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='subCategory'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                                Price:
                            </label>
                            <input
                                type="text"
                                id="price"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='price'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                                Rating:
                            </label>
                            <input
                                type="text"
                                id="rating"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                name='rating'
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
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
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
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
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
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddToy;