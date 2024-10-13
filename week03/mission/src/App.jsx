import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/root-layout'
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import SearchPage from './pages/search'; 
import MoviesPage from './pages/category'; 
import NowPlayingPage from './pages/nowplaying'; 
import PopularPage from './pages/popular'; 
import TopRatedPage from './pages/toprated'; 
import UpComingPage from './pages/upcoming'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <PopularPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'search', element: <SearchPage /> },
      {
        path: 'movies',
        element: <MoviesPage />,
        children: [
          { path: 'now-playing', element: <NowPlayingPage /> },
          { path: 'popular', element: <PopularPage /> },
          { path: 'top-rated', element: <TopRatedPage /> },
          { path: 'up-coming', element: <UpComingPage /> },
        ],
      },
    ],
    errorElement: <h1>잘못된 경로</h1>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
