import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Helmet } from 'react-helmet-async';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from "react-icons/io";
const Register = () => {
    const provider = new GoogleAuthProvider();
    const { createUser, setUser, updateUser,email,setEmail } = useContext(AuthContext)
    const [showPassword,setShowPassword]=useState(false)
    
    const handleChange = (e) => {
        setEmail(e.target.value);
      };
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name)
        const regex1 = /^(?=.*[A-Z])/;
        const regex2 = /^(?=.*[a-z])/;

        if (!regex1.test(password)) {
            toast.error('at least a upper case required')
            return
        }
        else if (!regex2.test(password)) {
            toast.error('at least a lower case required ')
            return
        }
        else if (password.length < 6) {
            toast.error('password must be at least 6 charecter')
            return
        }

        createUser(email, password).then((res) => {
            const user = res.user

            updateUser({ displayName: name, photoURL: photo }).then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
            })
            setUser(user)
            console.log(user)
            toast.success('registered done successfully')
            navigate('/')
        }).catch((error) => {
            // An error occurred
            // ...
            console.log(error)
            toast.error(error.message)
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
                  toast.error(errorMessage)
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
                            <title>Event | Register</title>
                        </Helmet>
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>

                <form onSubmit={handleRegister}>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                        <input id="name" name='name' type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input id="email" onChange={handleChange} name='email' type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 mb-1">Photo URL</label>
                        <input id="photo" name="photo" type="url" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                       <div className='relative'>
                       <input id="password" name='password' type={showPassword?"text":"password"} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                       <button onClick={()=>setShowPassword(!showPassword)} className='btn btn-sm absolute right-4 top-2'>{showPassword?<IoMdEyeOff />:<FaEye />}</button>
                       </div>
                    </div>

                     <NavLink to='/forget-password'> <p className='underline underline-offset-1 mb-5'>Forget password</p></NavLink>
                    <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition duration-200">
                        Register
                    </button>
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
                    Already have an account?
                    <NavLink to="/login" className="text-sky-600 hover:underline">Login here</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;