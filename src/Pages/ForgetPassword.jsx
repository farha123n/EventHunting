import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
const ForgetPassword = () => {
    const auth = getAuth()
    const { email } = useContext(AuthContext)
    
    
    const handleForgeTPassword = () => {
        console.log('kjj')
    
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                toast.info("Password reset email sent!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
            });
    }
    return (
        <div className='flex justify-center bg-sky-100 w-10/12 mx-auto min-h-screen items-center'>
             <Helmet>
                                        <title>Event | Forget Password</title>
                                    </Helmet>
            <div>
                <p className='text-2xl text-sky-700'>Reset You password</p>
                <label className="block text-lg font-medium text-gray-700">
                    Email:
                    <input
                        type="email"
                        value={email}

                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </label>
              <div className='flex justify-center'>
              <button onClick={handleForgeTPassword} className='bg-sky-800 mx-auto text-white text-xl px-4 py-2 rounded-2xl m-4'>Reset</button>
              </div>
            </div>
            
        </div>
    );
};

export default ForgetPassword;