import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ThreadList from './components/ThreadManagement/ThreadList';
import UserManagement from './components/UserManagement';
import ReportManagement from './components/ReportManagement';

const Threads = () => (
  <div>
    <ThreadList />
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-8">
        <nav className="mb-6 flex justify-end space-x-4">
          <Link 
            to="/" 
            className="px-4 py-2 rounded-md bg-white text-gray-900 font-semibold border border-gray-300 hover:bg-gray-200"
          >
            Trådhantering
          </Link>
          <Link 
            to="/user-management" 
            className="px-4 py-2 rounded-md bg-white text-gray-900 font-semibold border border-gray-300 hover:bg-gray-200"
          >
            Användarhantering
          </Link>
          <Link 
            to="/report-management" 
            className="px-4 py-2 rounded-md bg-white text-gray-900 font-semibold border border-gray-300 hover:bg-gray-200"
          >
            Rapporthantering
          </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Threads />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/report-management" element={<ReportManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
