import Home from "@features/home";
import User from "@features/user";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/user/:id",
        element: <User />,
    }
]);

export default Router;
