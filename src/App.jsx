import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Regist from './pages/Auth/Regist';
import Home from './pages/Home/Home';
import QnaHome from './pages/Qna/QnaHome';
import QnaDetail from './pages/Qna/QnaDetail';
import RegistProject from './pages/Request/RegistProject';
import RequestHome from './pages/Request/RequestHome';
import RequestDetail from './pages/Request/RequestDetail';
import Callback from './auth/Callback';
import useStore from './zustand/Store';

function App() {
  const { setIsLogin } = useStore();

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('accessToken');
      setIsLogin(!!token);
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<Navigate to="/home" />} />
          {/* 기본 경로 리다이렉션 */}
          <Route path="/home" element={<Home />} />
          {/* Qna */}
          <Route path="qna" element={<QnaHome />} />
          <Route path="qna/:qnaId" element={<QnaDetail />} />
          {/* Project */}
          <Route path="project" element={<RequestHome />} />
          <Route path="project/:requestId" element={<RequestDetail />} />
          <Route path="project/regist" element={<RegistProject />} />
        </Route>
        {/* User Regist */}
        <Route path="/regist" element={<Regist />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
