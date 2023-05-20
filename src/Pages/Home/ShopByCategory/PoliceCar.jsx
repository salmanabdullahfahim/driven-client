import React, { useEffect, useState } from 'react';
import ToyCard from '../../AllToys/ToyCard';

const PoliceCar = () => {
    const [toys, setToys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = `http://localhost:5000/CategoryToys/MiniPoliceCar`
    useEffect(()=>{
        setIsLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setToys(data);
            setIsLoading(false);
        })
    },[toys])
    
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)}
        </div>
    );
};

export default PoliceCar;