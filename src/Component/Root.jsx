import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
        <Navbar />
        <ToastContainer autoClose={3000} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
};

export default Root;