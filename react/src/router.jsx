import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import User from "./components/User";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/users",
        element: <User />,
    },
]);

export default router;
