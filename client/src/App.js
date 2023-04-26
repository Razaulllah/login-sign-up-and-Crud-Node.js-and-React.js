import './App.css';
import React, { useState } from 'react';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddCustomers from './components/crud/add/add';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // perform login and set isLoggedIn to true on success
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Navigate to="/add" />} />
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}
          <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
          <Route exact path="/register" element={<Register />} />
          {isLoggedIn ? (
            <Route exact path="/add" element={<AddCustomers />} />
          ) : (
            <Route path="/add" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
