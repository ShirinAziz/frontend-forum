import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import threadsData from "../../mockData/threads.json";

const ThreadPage = () => {
  const { id } = useParams(); // Hämta trådens ID från URL:en
  const [thread, setThread] = useState(null);
  const navigate = useNavigate(); // För att navigera tillbaka till listan

  useEffect(() => {
    const selectedThread = threadsData.find(
      (thread) => thread.id === parseInt(id)
    ); // Hitta tråden baserat på ID
    setThread(selectedThread);
  }, [id]);

  if (!thread) {
    return <div>Tråden finns inte.</div>; // Om tråden inte finns
  }

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="btn btn-dark mb-4">
        Tillbaka
      </button>
      <h1 className="text-3xl font-bold mb-4">{thread.title}</h1>
      <p className="text-gray-600">{thread.content}</p>
      <small className="text-gray-500">
        Skapad av: {thread.author} | {thread.created_at}
      </small>
    </div>
  );
};

export default ThreadPage;
