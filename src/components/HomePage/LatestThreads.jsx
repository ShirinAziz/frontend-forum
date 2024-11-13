import React from "react";

const LatestThreads = ({ threads, onThreadClick }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">
      Dina senaste visade diskussioner
    </h2>
    {threads.map((thread) => (
      <div
        key={thread.id}
        className="mb-2 p-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-blue-100 cursor-pointer max-w-xs w-full"
        onClick={() => onThreadClick(thread)}
      >
        <h3 className="text-lg font-semibold">{thread.title}</h3>
        <p className="text-gray-600 text-sm">{thread.content}</p>
      </div>
    ))}
  </div>
);

export default LatestThreads;
