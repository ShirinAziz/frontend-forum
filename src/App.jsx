import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "/src/Login";
import Register from "/src/Register";
import ThreadList from "./components/ThreadManagement/ThreadList";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import ThreadPage from "./components/HomePage/ThreadPage";
import Dashboard from "./Dashboard"; 
import FakeLoginProvider, { FakeLoginContext } from "./FakeLoginProvider"; 

// Skyddad route-funktion för autentisering
const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = React.useContext(FakeLoginContext);
  return isLoggedIn ? element : <Navigate to="/Login" replace />;
};

const App = () => (
  <FakeLoginProvider>
    <Router>
      <div className="bg-gray-100 min-h-screen p-8">
        <Navbar />
        <Routes>
          {/* Offentliga rutter */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/threads" element={<ThreadList />} />
          <Route path="/thread/:id" element={<ThreadPage />} />

          {/* Skyddade rutter */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </FakeLoginProvider>
);

export default App;
