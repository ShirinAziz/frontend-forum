import React, { useEffect, useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  // Backend URL här.
 // const API_URL = "https://din-backend-url.com/api"; // Ersätt med den faktiska backend-URL


  useEffect(() => {
    // Ändra här vid BACKEND: Hämta användardata från backend istället för mockData. Det ska stå `${API_URL}/users` i parantesen.
    fetch('/src/mockData/users.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error loading user data:", error));
  }, []);

  const handleBlock = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, isBlocked: !user.isBlocked } : user
    ));
  };

  const handleWarn = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, isWarned: true } : user
    ));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-neutral">Användarhantering</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="bg-base-200 shadow-md rounded-md p-4 mb-4">
            <h3 className="text-xl font-semibold">{user.username}</h3>
            <p>{user.email}</p>
            <p>Status: {user.isBlocked ? "Blockerad" : "Aktiv"} {user.isWarned && "| Varnad"}</p>
            <div className="mt-4 space-x-2">
              <button onClick={() => handleBlock(user.id)} className="btn btn-error">
                {user.isBlocked ? "Avblockera" : "Blockera"}
              </button>
              <button onClick={() => handleWarn(user.id)} className="btn btn-warning" disabled={user.isWarned}>
                {user.isWarned ? "Varnad" : "Varna"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
