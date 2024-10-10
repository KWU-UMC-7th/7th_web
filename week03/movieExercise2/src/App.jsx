import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import MoviesPage from './pages/MoviesPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';

import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';

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
                element: <SignupPage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            },
            
            {
                path: 'movies', // /movies 경로 처리
                element: <CategoriesPage />,
            },    
            
            {
                path: 'movies/now-playing', // /movies/now-playing
                element: <NowPlaying />
            },
            
            {
                path: 'movies/popular', // /movies/popular
                element: <Popular />
            },
            
            {
                path: 'movies/top-rated', // /movies/top-rated
                element: <TopRated />
            },
            
            {
                path: 'movies/up-coming', // /movies/up-coming
                element: <Upcoming />
            },
        
            
            {
                path: 'movies/:movieId', // 동적 라우트
                element: <MoviesPage />
            }
        ]
    }
]);


function App() {
    return <RouterProvider router={router}/>
}

export default App;
