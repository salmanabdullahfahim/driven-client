import React, { useEffect, useState } from 'react';
import ToyCard from '../../AllToys/ToyCard';

const PoliceCar = () => {
    const [toys, setToys] = useState([]);

    const url = `https://driven-server.vercel.app/CategoryToys/MiniPoliceCar`
    useEffect(()=>{
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setToys(data);
            
        })
    },[toys])
    
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)}
        </div>
    );
};

export default PoliceCar;