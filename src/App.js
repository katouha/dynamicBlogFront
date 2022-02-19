import logo from './logo.svg';
import React from "react"
import './App.css';
import ManagementLogin from './components/pages/ManagementLogin'
import ManagementCreateBlog from './components/pages/ManagementCreateBlog'
import BlogTop from './components/pages/BlogTop';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import BlogList from './components/pages/BlogList';
import BlogDetail from './components/pages/BlogDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/blogPage/top" element={<BlogTop />} />
        <Route path="/blogPage/blogList" element={<BlogList />} />
        <Route path="/blogPage/blogDetail" element={<BlogDetail />} />
        <Route path="/management/createBlog" element={<ManagementCreateBlog />} />
        <Route path="/management/login" element={<ManagementLogin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
