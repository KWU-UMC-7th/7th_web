import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Movies from "./pages/MoviesPage.jsx";
import RootLayout from "./layout/root-layout.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import JoinPage from "./pages/JoinPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

import NowPlaying from './pages/now-playing.jsx';
import Popular from './pages/popular.jsx';
import TopRated from './pages/top-rated.jsx';
import Upcoming from './pages/up-coming.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
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
                // /:을 활용해서, 동적으로 바뀌는 부분의 이름을 정의
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