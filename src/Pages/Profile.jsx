import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const {user,setUser,updateUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleUpdate=(e)=>{
        e.preventDefault()
     const   form =e.target
       const name=form.name.value
       const photo =form.photo.value
        updateUser({ displayName: name, photoURL: photo }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photo })
            toast.success('update successfull')
            navigate('/')
        })
    }
   
    return (
        <div className='p-10'>
                <Helmet>
                            <title>Event | Profile</title>
                        </Helmet>
            <form onSubmit={handleUpdate}>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                    <input id="name" name='name' type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                </div>


                


                <div className="mb-4">
                    <label htmlFor="photo" className="block text-gray-700 mb-1">Photo URL</label>
                    <input id="photo" name="photo" type="url" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" required />
                </div>


                


                <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition duration-200">
                    Update
                </button>
            </form>
        </div>
    );
};

export default Profile;