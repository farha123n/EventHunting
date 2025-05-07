import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>

            <Navbar></Navbar>
            <ToastContainer autoClose={3000} />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;