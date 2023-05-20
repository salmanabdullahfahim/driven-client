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
    const [isLoading, setIsLoading] = useState(true);


    const url = `http://localhost:5000/myToys?email=${user?.email}`

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setToys(data);
                setIsLoading(false);
            })
    }, [user]);



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

                fetch(`http://localhost:5000/toys/${id}`, {
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

    return (
        <>
            <h2 className='text-center font-bold text-3xl mt-6'> My Toys</h2>
            <div className="w-full mt-6 flex justify-end">
                <div className="flex mb-4 items-center">
                    <label htmlFor="sortPrice" className="mr-2">Sort by Price:</label>
                    <select id="sortPrice" className="p-2  rounded-xl shadow-md">
                        <option value="">Select</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>


            <div className="overflow-x-auto w-full">
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

        </>
    );
};

export default MyToys;