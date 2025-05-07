import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const provider = new GoogleAuthProvider();
    const {logIn}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
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
                 navigate(`${location.state?location.state:'/'}`)           
            }) .catch((error) => {
                const errorCode = error.code;
                 setErrormsg(error.message)
                 toast.error(errorMessage)
              });
    }
   const handleGoogleSignIN = () => {
       
        console.log('star')
      const auth = getAuth();
      signInWithPopup(auth, provider)
          .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // IdP data available using getAdditionalUserInfo(result)
              // ...
          }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
          });
  }
    return (
        <div className='flex justify-center items-center min-h-screen'>
                <Helmet>
                            <title>Event | Login</title>
                        </Helmet>
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
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>


                <button onClick={ handleGoogleSignIN} className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                </button>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?
                    <NavLink to="/register" className="text-sky-600 hover:underline">Sign up</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;