import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import MoviePage from './components/Moviepage.jsx'
import RootLayout from './layout/root-layout.jsx';
import LoginPage from './pages/Loginpage.jsx'
import SignupPage from './pages/Signuppage.jsx'
import SearchPage from './pages/Searchpage.jsx'
import CategoryPage from './pages/Categorypage.jsx'

import NowplayingPage from './pages/moviePages/Nowplayingpage.jsx';
import PopularPage from './pages/moviePages/Popularpage.jsx';
import TopratedPage from './pages/moviePages/Topratedpage.jsx';
import UpcomingPage from './pages/moviePages/Upcomingpage.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MoviePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/movies',
        element: <CategoryPage />
      },
      {
        path: '/movies/now-playing',
        element: <NowplayingPage />
      },
      {
        path: '/movies/popular',
        element: <PopularPage />
      },
      {
        path: '/movies/top-rated',
        element: <TopratedPage />
      },
      {
        path: '/movies/up-coming',
        element: <UpcomingPage />
      },
    ]
  },

])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;