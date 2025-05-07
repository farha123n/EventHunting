import React from 'react';
import { Helmet } from 'react-helmet-async';
import errorImg from '../assets/5203299.jpg'
const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Event | Error</title>
            </Helmet>
            <div className='flex justify-center items-center min-h-screen'>
               <img className='w-3/5' src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default Error;