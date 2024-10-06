import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import Movies from "./pages/movies.jsx";
import RootLayout from "./layout/root-layout.jsx";
import LoginPage from "./pages/login.jsx";
import JoinPage from "./pages/join.jsx";
import SearchPage from "./pages/search.jsx";
import CategoryPage from "./pages/category.jsx";

import NowPlaying from './pages/now-playing.jsx';
import Popular from './pages/popular.jsx';
import TopRated from './pages/top-rated.jsx';
import Upcoming from './pages/up-coming.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'signup',
                element: <JoinPage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            },
            {
                path: 'movies',
                element: <CategoryPage/>
            },
            {
                // /:을 활용해서, 동적으로 바뀌는 부분의 이름을 정의해줍시다.
            path: 'movies/:movieId',
            element: <Movies/>
        },
        {
            path: 'movies/now-playing',
            element: <NowPlaying/>
        },
        {
            path: 'movies/popular',
            element: <Popular/>
        },
        {
            path: 'movies/top-rated',
            element: <TopRated/>
        },
        {
            path: 'movies/up-coming',
            element: <Upcoming/>
        }
        ]
    },

])

function App() {
    return <RouterProvider router={router}/>
}

export default App
