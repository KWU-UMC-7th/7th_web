import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import RootLayout from "./layout/RootLayout.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignsupPage from "./pages/SignupPage.jsx";
import CategoryPage from "./pages/Category.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import NowPlayingPage from "./pages/NowPlayingPage.jsx";
import PopularPage from "./pages/PopularPage.jsx";
import TopRatedPage from "./pages/TopRatedPage.jsx";
import UpcomingPage from "./pages/UpComingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
    children: [
      {
        // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
        index: true,
        element: <MoviesPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignsupPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
      { path: "category/now-playing", element: <NowPlayingPage /> },
      { path: "category/popular", element: <PopularPage /> },
      { path: "category/top-rated", element: <TopRatedPage /> },
      { path: "category/upcoming", element: <UpcomingPage /> },
      {errorElement: <h1>너는 없는 경로에 들어왔다 ^ㅁ^ 야호~!</h1>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
