import React, { useEffect, useState } from 'react';
import ToyCard from '../../AllToys/ToyCard';

const SuvCar = () => {

    const [toys, setToys] = useState([]);

    const url = `http://localhost:5000/CategoryToys/SUVCar`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
    },[toys])

    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)}
        </div>
    );
};

export default SuvCar;