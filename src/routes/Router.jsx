import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Home/Login";
import Register from "../components/Register";
import Coverage from "../pages/Coverage";
import Error from "../pages/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SendParcel from "../pages/SendParcel";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "coverage",
                Component: Coverage
            },
            {
                path: "pricing",
                element: <PrivateRoute>
                    <SendParcel></SendParcel>
                </PrivateRoute>
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            }
        ]
    }

])
