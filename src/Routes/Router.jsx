import { createBrowserRouter } from "react-router";
import Root from "../Component/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Profile from "../Pages/Profile";
import Login from "../Component/Login";
import Register from "../Component/Register";
import EventDetails from "../Component/EventDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserProfile from "../Pages/UserProfile";
import Blog from "../Component/Blog";
import ForgetPassword from "../Pages/ForgetPassword";
import Loader from "../Component/Loader";




export  const  router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home, loader:()=>fetch('/event.json'),hydrateFallbackElement:<Loader></Loader> },
     
      {
        path:'/profile',element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/login',Component:Login
      },
      {
        path:'/register',Component:Register
      },
      {
        path:'/details/:id',
       element:<PrivateRoute>
        <EventDetails></EventDetails>
       </PrivateRoute>,
        loader:()=>fetch('/event.json'),hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'/user-profile',
        element:<PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute>
      },
      {
        path:'/blogs',element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:'/forget-password',element:<ForgetPassword></ForgetPassword>
      }
    ],
   
  },
  {
    path:'/error',
    Component:Error
  }


])