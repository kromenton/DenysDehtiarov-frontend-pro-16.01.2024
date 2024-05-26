import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';

function App() {
  return (
    <Router basename="/DenysDehtiarov-frontend-pro-16.01.2024/homeWorks/hw37">
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
