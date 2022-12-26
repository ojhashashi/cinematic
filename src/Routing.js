import {
    createBrowserRouter, redirect, Navigate
} from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Toprated from "./components/Toprated";
import Upcoming from "./components/Upcoming";
import Singlemovie from "./components/Singlemovie";
import SearchedMovie from "./components/SearchedMovie";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '', element: < Navigate to="/home/1" replace /> },
            { path: 'home', element: < Navigate to="/home/1" replace /> },
            { path: 'home/:id', element: <Home /> },
            { path: 'top-rated', element: < Navigate to="/top-rated/1" replace /> },
            { path: 'top-rated/:id', element: <Toprated /> },
            { path: 'upcoming', element: < Navigate to="/upcoming/1" replace /> },
            { path: 'upcoming/:id', element: <Upcoming /> },
            { path: 'movie-detail/:id', element: <Singlemovie /> },
            { path: 'searched-movie', element: <SearchedMovie /> },

        ]
    }
]);

export default router;