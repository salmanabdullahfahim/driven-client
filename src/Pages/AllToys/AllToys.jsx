import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import UseTitle from '../../Hooks/useTitle';

const AllToys = () => {
    UseTitle('All Toys')

    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = () =>{
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
        .then(res => res.json())
        .then(data => setToys(data))
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-6'>All Toys</h2>


            <div className="flex items-center justify-center">
                <input
                    onChange={(event)=> setSearchText(event.target.value)}
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

            <div className='grid md:grid-2 lg:grid-cols-3 gap-3 my-6'>
                {
                    toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;