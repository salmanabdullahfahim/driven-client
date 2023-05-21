import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hooks/useTitle';
import AllToyRow from './AllToyRow';
import { SyncLoader } from 'react-spinners';

const AllToys = () => {
    UseTitle('All Toys')

    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(20)


    useEffect(() => {
        setIsLoading(true);
        fetch(`https://driven-server.vercel.app/toys?limit=${limit}`)
            .then(res => res.json())
            .then(data => {

                setToys(data);
                setIsLoading(false);

            })
    }, [limit])

    const handleSearch = () => {
        setIsLoading(true);
        fetch(`https://driven-server.vercel.app/toySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setIsLoading(false);
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-6 italic'>All Toys</h2>


            <div className="flex items-center justify-center">
                <input
                    onChange={(event) => setSearchText(event.target.value)}
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-gray-600"
                />
                <button onClick={handleSearch} className="bg-black hover:bg-black/70 text-white rounded-r-md px-4 py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.6 17.6L21 21"
                        />
                    </svg>
                </button>
            </div>

            {
                isLoading ? (
                    <div className="flex justify-center items-center h-32">
                        <div className="loader">
                            <SyncLoader color="#000000" />
                        </div>
                    </div>
                ) : (<div className="w-11/12 mx-auto my-12">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4">Serial</th>
                                <th className="py-2 px-4">Photo</th>
                                <th className="py-2 px-4">Toy Name</th>
                                <th className="py-2 px-4">Seller</th>
                                <th className="py-2 px-4">Sub-category</th>
                                <th className="py-2 px-4">Price</th>
                                <th className="py-2 px-4">Available Quantity</th>
                                <th className="py-2 px-4">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, index) => <AllToyRow key={toy._id} toy={toy} index={index + 1}></AllToyRow>)
                            }
                        </tbody>
                    </table>
                    <div hidden={!limit} className='w-1/12 mx-auto mt-4'>
                        <button onClick={()=> setLimit(0)} className='btn mx-auto'>See All</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllToys;

