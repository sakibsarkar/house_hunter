import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
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
            }
        ]
    }
])