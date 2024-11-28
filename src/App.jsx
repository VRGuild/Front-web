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
// import ProjectSupport
import Callback from './auth/Callback';
import { useStore } from './zustand/Store';
import Last from './pages/Last/Last';

function App() {
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
          {/* <Route path="project/support" element={<ProjectSupport />} /> */}
        </Route>
        {/* User Regist */}
        <Route path="/regist" element={<Regist />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/last" element={<Last />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
