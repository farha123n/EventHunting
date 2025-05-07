import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    
    const { createUser, setUser, updateUser } = useContext(AuthContext)
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
        });
    }
  
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>

                <form onSubmit={handleRegister}>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                        <input id="name" name='name' type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input id="email" name='email' type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 mb-1">Photo URL</label>
                        <input id="photo" name="photo" type="url" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                        <input id="password" name='password' type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                    </div>


                    <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition duration-200">
                        Register
                    </button>
                </form>


             


                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?
                    <NavLink to="/login" className="text-sky-600 hover:underline">Login here</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;