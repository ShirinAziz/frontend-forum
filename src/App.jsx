import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';            
import Login from '/src/Login';                
import Register from '/src/Register';        
import ThreadList from './components/ThreadManagement/ThreadList'; 
import Navbar from './components/HomePage/Navbar';               
import Footer from './components/HomePage/Footer';
import ThreadPage from './components/HomePage/ThreadPage'; 

const App = () => (
  <Router>
    <div className="bg-gray-100 min-h-screen p-8">
      <Navbar /> {/* Navbar överst på sidan för navigering */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} /> 
        <Route path="/threads" element={<ThreadList />}/>
        <Route path="/thread/:id" element={<ThreadPage />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;