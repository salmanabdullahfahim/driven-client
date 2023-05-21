import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/addToy',
          element: <AddToy></AddToy>
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/toyDetails/:id',
          element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://driven-server.vercel.app/toys/${params.id}`)
        },
        {
          path: '/myToys',
          element: <MyToys></MyToys>
        },
        {
          path: '/updateToys/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://driven-server.vercel.app/toys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;