import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ToyRow from './ToyRow';
import UseTitle from '../../Hooks/useTitle';
import Swal from 'sweetalert2';
import { SyncLoader } from 'react-spinners';

const MyToys = () => {
    UseTitle('My Toys')

    const { user } = useContext(AuthContext);

    const [toys, setToys] = useState([]);
    const [latestData, setLatestData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortOption, setSortOption] = useState('');


    const url = `https://driven-server.vercel.app/myToys?email=${user?.email}&sort=${sortOption}`;

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setToys(data);
                setLatestData(data);
                setIsLoading(false);
            })
    }, [user, sortOption]);

    useEffect(() => {
        setToys(latestData);
    }, [latestData]);



    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`https://driven-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = toys.filter(toy => toy._id !== id)
                            setToys(remaining);
                        }
                    })

            }
        })
    }

    const handleSortChange = event => {
        setSortOption(event.target.value);
    };

    return (
        <div className='bg-white'>
            <h2 className='text-center font-bold text-3xl mt-6 italic'> My Toys</h2>
            <div className="w-full mt-6 ">
                <div className="flex mb-4 items-center justify-end mr-12">
                    <label htmlFor="sortPrice" className="mr-2 text-md font-semibold">Sort by Price</label>
                    <select
                        id="sortPrice"
                        className="p-2 rounded-md shadow-xl border  bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="">Select</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>


            <div className="overflow-x-auto w-11/12 mx-auto mb-8">
                {isLoading ? (
                    <div className="flex justify-center items-center h-32">
                        <div className="loader">
                            <SyncLoader color="#000000" />
                        </div>
                    </div>
                ) : (
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy Name</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Seller</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toys?.map(toy => (
                                <ToyRow key={toy._id} toy={toy} handleDelete={handleDelete} />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

        </div>
    );
};

export default MyToys;