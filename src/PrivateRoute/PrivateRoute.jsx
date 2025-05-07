import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
   console.log(loading)

    if(loading)
        return  <div className='min-h-screen  flex justify-center items-center'> 
            <span className="loading loading-bars loading-xl"></span>
        </div>
           
        

    if(user && user.email){

        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}
export default PrivateRoute;