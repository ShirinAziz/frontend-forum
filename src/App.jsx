import React from 'react';
import ThreadList from './components/ThreadManagement/ThreadList';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-neutral">Utvecklarforum</h1>
      <ThreadList />
    </div>
  );
};

export default App;
