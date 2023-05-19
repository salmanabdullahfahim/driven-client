import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ToyRow from './ToyRow';
import UseTitle from '../../Hooks/useTitle';
import Swal from 'sweetalert2';

const MyToys = () => {
    UseTitle('My Toys')

    const { user } = useContext(AuthContext);
    
    const [toys, setToys] = useState([])


    const url = `http://localhost:5000/myToys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);



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
        <div className="overflow-x-auto w-full">
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

                    {
                        toys?.map(toy => <ToyRow key={toy._id} toy={toy} handleDelete={handleDelete}></ToyRow>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyToys;