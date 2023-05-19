import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ToyRow from './ToyRow';
import UseTitle from '../../Hooks/useTitle';

const MyToys = () => {
    UseTitle('My Toys')

    const {user} = useContext(AuthContext);

    const [toys, setToys] = useState([])
  

    const url = `http://localhost:5000/myToys?email=${user?.email}`
   

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setToys(data))
      }, [user]) 

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Seller</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        toys?.map(toy => <ToyRow key={toy._id} toy={toy}></ToyRow>)
                    }
                   
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;