import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/Logo/pngwing.com (8).png'
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error)
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='allToys'>All Toys</Link></li>
        {
            user ?
                <>
                    <li><Link to='/myToys'>My Toys</Link></li>
                    <li><Link to='/addToy'>Add a Toy</Link></li>

                </> : ""
        }
        <li><Link to='/blogs'>Blogs</Link></li>


    </>
    return (
        <div className='sticky top-0 left-0 z-50 w-full'>
            <div className=" navbar bg-black rounded-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <div >
                        <Link to='/' className='flex items-center '><img className='w-20 hidden md:block' src={logo1} alt="" />
                            <h3 className='font-bold text-2xl ml-3 text-white italic'>Driven..</h3>
                        </Link>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">

                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>

                            {user.photoURL && <img className="h-12 rounded-full border-2  border-white cursor-pointer" src={user?.photoURL} alt="" title={user?.displayName} />}

                            <button onClick={handleLogout}
                                type="button"
                                className="lg:ml-5 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Logout
                            </button>


                        </> : <Link to='/login'>
                            <button
                                type="button"
                                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Login
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;