import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import AllToys from "../../pages/allToys/allToys";
import ToyDetails from "../../pages/toyDetails/ToyDetails";
import AddToy from "../../pages/addToy/AddToy";
import MyToys from "../../pages/myToys/MyToys";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import PrivateRoute from "../privateRoute/PrivateRoute";
import UpdateToy from "../../pages/updateToy/UpdateToy";
import Blog from "../../pages/blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/allToys',
                element: <AllToys />
            },
            {
                path: '/toys/:id',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddToy /></PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: '/updateToys/:id',
                element: <PrivateRoute><UpdateToy /></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog />
            }
        // ]
        ],
        errorElement: <ErrorPage />
    },
]);

export default router;