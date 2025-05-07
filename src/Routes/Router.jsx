import { createBrowserRouter } from "react-router";
import Root from "../Component/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Profile from "../Pages/Profile";
import Login from "../Component/Login";
import Register from "../Component/Register";
import EventDetails from "../Component/EventDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




export  const  router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home, loader:()=>fetch('/event.json') },
      {
        path:'/error',
        Component:Error
      },
      {
        path:'/profile',Component:Profile
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
        loader:()=>fetch('/event.json')
      }
    ]
  }

])