import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

// 1. 만든 페이지들을 import
import HomePage from "./pages/home.jsx";
import Login from  "./pages/login.jsx";
import Signup from  "./pages/signup.jsx";
import NotFound from "./pages/not-found.jsx";
import Search from "./pages/search.jsx";
import Category from "./pages/category.jsx";
import RootLayout from "./layout/root-layout.jsx";
// 2. 연결
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
        children: [
            {
                // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                index: true,
                element: <HomePage/>
            },
            {
                path: '/login',
               element: <Login/>
            },
            {
                path: '/signup',
               element: <Signup/>
            },
            {
                path: '/search',
               element: <Search/>
            },
            {
                path: '/category/:id',
                element: <Category/>
            }
        ]
    },

])

function App() {
    return <RouterProvider router={router}/>
}

export default App
