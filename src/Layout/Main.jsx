import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;