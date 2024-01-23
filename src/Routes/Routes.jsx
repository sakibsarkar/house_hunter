import BookingDetails from "../DashBoardPages/BookingDetails/BookingDetails";
import DashLayout from "../Layout/DashLayout/DashLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MainLayout from "../Layout/MainLayout";
import ManageRoom from "../DashBoardPages/ManageRoom/ManageRoom";
import MyBookings from "../DashBoardPages/MyBookings/MyBookings";
import MyRooms from "../DashBoardPages/MyRooms/MyRooms";
import OwnerPrivate from "../PrivateRoutes/OwnerPrivate";
import Register from "../Pages/Register/Register";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Userprivate from "../PrivateRoutes/Userprivate";
import { createBrowserRouter } from "react-router-dom";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
            },
            {
                path: '/room/:id',
                element: <Userprivate><RoomDetails /></Userprivate>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard/my_rooms",
                element: <OwnerPrivate><MyRooms /></OwnerPrivate>
            },
            {
                path: "/dashboard/manage_room",
                element: <OwnerPrivate><ManageRoom /></OwnerPrivate>
            },
            {
                path: "/dashboard/my_booking",
                element: <Userprivate><MyBookings /></Userprivate>
            },
            {
                path: "/dashboard/booking_details",
                element: <Userprivate><BookingDetails /></Userprivate>
            }
        ]
    }
])