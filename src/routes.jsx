import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
            }
        ]
    },
]);