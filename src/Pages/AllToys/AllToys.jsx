import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-6'>All Toys</h2>

            <div className='grid md:grid-2 lg:grid-cols-3 gap-3 my-6'>
                {
                  toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;