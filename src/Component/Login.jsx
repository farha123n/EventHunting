import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

    const {logIn}=useContext(AuthContext)
    console.log(logIn)
     const [errormsg,setErrormsg]=useState('')
    const handleLogin=(e)=>{
            e.preventDefault()
            const form=e.target
            const email=form.email.value
            const password=form.password.value
            setErrormsg('')
            logIn(email,password).then((user)=>{
                console.log(user)
                 toast.success("User successfully LoggedIn!");           
            }) .catch((error) => {
                const errorCode = error.code;
                 setErrormsg(error.message)
              });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
       
       
      </div>
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input id="email" name='email' type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="you@example.com" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                        <input id="password" name='password' type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition duration-200">
                        Sign In
                    </button>
                    <p className='text-red-500'>{errormsg}</p>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?
                    <NavLink to="/register" className="text-sky-600 hover:underline">Sign up</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;