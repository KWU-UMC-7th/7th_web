import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Membership from './pages/Membership';
import Movie from './components/Movie'; // Movie 컴포넌트 import
import Header from './components/Header';
import Sidebar from './components/Sidebar'; // Sidebar 컴포넌트 import
import React, { useState } from 'react'; // useState 추가
import { movies } from './mocks/movies.js';

function App() {
  const [showMessage, setShowMessage] = useState(false); // 메시지 표시 여부 상태

  const handleSearchClick = () => {
    setShowMessage(true); // "찾는 버튼입니다" 메시지 표시
  };

  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Sidebar onSearchClick={handleSearchClick} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Membership" element={<Membership />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/movies" element={<Movie />} />
          </Routes>
          {showMessage && <div className="message">찾는 버튼입니다</div>} {/* 메시지 표시 */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
