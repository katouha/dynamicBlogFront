import logo from './logo.svg';
import React from "react"
import './App.css';
import ManagementLogin from './components/pages/ManagementLogin'
import ManagementCreateBlog from './components/pages/ManagementCreateBlog'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagementLogin />} />
        <Route path="/management/createBlog" element={<ManagementCreateBlog />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
