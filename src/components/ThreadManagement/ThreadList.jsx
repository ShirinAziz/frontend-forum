import React, { useEffect, useState } from 'react';
import threadsData from '../../mockData/threads.json'; 
import EditThread from './EditThread';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const [editingThread, setEditingThread] = useState(null);
  
  const isAdmin = true; // Mockad admin-status. Här kan man ändra till "false" för att se hur det ser ut för vanliga användare.

  useEffect(() => {

    setThreads(threadsData);
  }, []);

  const handleEdit = (thread) => {
    setEditingThread(thread);
  };

  const handleSaveEdit = (updatedThread) => {
    setThreads(threads.map(thread => 
      thread.id === updatedThread.id ? updatedThread : thread
    ));
    setEditingThread(null);
  };

  const handleDelete = (id) => {
    setThreads(threads.filter(thread => thread.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">.</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id} className="bg-base-200 shadow-md rounded-md p-4 mb-4">
            <h3 className="text-xl font-semibold">{thread.title}</h3>
            <p className="text-gray-400 mt-2">{thread.content}</p>
            <small className="text-gray-500">Skapad av: {thread.author} | {thread.created_at}</small>
            
            {isAdmin && (
              <div className="mt-4 space-x-2">
                <button onClick={() => handleEdit(thread)} className="btn btn-primary">
                  Redigera
                </button>
                <button onClick={() => handleDelete(thread.id)} className="btn btn-error">
                  Ta bort
                </button>
                <button className={`btn ${thread.is_closed ? 'btn-secondary' : 'btn-success'}`}>
                  {thread.is_closed ? "Öppna" : "Stäng"}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {editingThread && <EditThread thread={editingThread} onSave={handleSaveEdit} />}
    </div>
  );
};

export default ThreadList;
