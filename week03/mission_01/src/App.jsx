import './App.css'
import CustomButton from "./components/custom-button.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useEffect } from 'react';

import RootLayout from './layout/root-layout.jsx';
import HomePage from './pages/home.jsx';
import NotFound from './pages/error.jsx';
import MoviesPage from './pages/movies.jsx';
import LogIn from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import SearchPage from './pages/search.jsx';

const router = createBrowserRouter([
  //접근 경로 처리
  {
    path: '/',   //현재 페이지에 접근하면 보여주는 요소들
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: '/',
        element: <HomePage/>
      },
      {
        path: 'movies',
        element: <MoviesPage/>
      },
      {
        path: 'login',
        element: <LogIn/>
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'search',
        element: <SearchPage/>
      }
    ]
  }
])

function App() {
    return (
      <>
        <RouterProvider router={router}/>
      </>
    )
    
}

export default App
