import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogOut = async () => {
        try {
          await logOut();
          toast.success("User successfully Logged Out!");
        } catch (error) {
          toast.error("Logout failed!");
          console.error(error);
        }
      };
    
    const link = <>
        <li className='font-semibold text-xl text-white'><NavLink to='/'>home</NavLink></li>
        <li className='font-semibold text-xl text-white'><NavLink to='/error'>error</NavLink></li>
       {user&& <li className='font-semibold text-xl text-white'><NavLink to='/blogs'>Blogs</NavLink></li>}

      {user && <li className='font-semibold text-xl text-white'><NavLink to='/profile'>Update profile</NavLink></li>}
      {user&& <li className='font-semibold text-xl text-white'><NavLink to='/user-profile'>your profile</NavLink></li>}  
    </>
    return (
        <div>
            
            <div className="navbar bg-gradient-to-r from-sky-400 to-blue-700 shadow-sm p-5">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className=" text-white p-4  font-semibold text-4xl">EventSphere</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
               
                <div className="navbar-end">
                    {user?(
                        <div className="relative group inline-block">
                        <img className='w-12 m-4 rounded-full' src={user.photoURL} alt="" />
                        <div className="absolute bottom-full left-1/2 mt-2 -translate-x-1/2  hidden group-hover:block bg-gray-800 text-white text-sm px-3  rounded">
                          {user.displayName}
                        </div>
                      </div>
                      
                        ):''}
                    {user ? (
                        <button onClick={handleLogOut}  className='btn bg-white p-6 text-xl text-sky-500'>LogOut</button>
                    ) : (
                        <NavLink to='/login' className='btn bg-white p-6 text-xl text-sky-500'>Login</NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;