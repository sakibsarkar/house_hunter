import DashLayout from "../Layout/DashLayout/DashLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MainLayout from "../Layout/MainLayout";
import MyRooms from "../DashBoardPages/MyRooms/MyRooms";
import OwnerPrivate from "../PrivateRoutes/OwnerPrivate";
import Register from "../Pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashLayout />,
        children: [
            {
                path: "/dashboard/my_rooms",
                element: <OwnerPrivate><MyRooms /></OwnerPrivate>
            }
        ]
    }
])