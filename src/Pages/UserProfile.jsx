import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
    const {user}=useContext(AuthContext)
    return (
   <div>
        <Helmet>
                            <title>Event | Update Profile</title>
                        </Helmet>
         <p className='text-center text-8xl text-sky-500'>Your Profile</p>
         <div className='flex justify-center min-h-screen items-center'>
        <div>
          
        <div className='flex justify-center'>
                <img className='w-48' src={user.photoURL} alt="dfs" />
            </div>
            <p className='text-6xl text-violet-600 text-center'> Name:<span className='text-black'>{user.displayName}</span></p>
            <p className='text-6xl text-violet-600 text-center'>email:<span className='text-black'>{user.email}</span></p>
        </div>
        </div>
   </div>
    );
};

export default UserProfile;