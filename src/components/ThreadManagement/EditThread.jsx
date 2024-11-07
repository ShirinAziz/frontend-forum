import React, { useState } from 'react';

const EditThread = ({ thread, onSave }) => {
  const [title, setTitle] = useState(thread.title);
  const [content, setContent] = useState(thread.content);

  const handleSave = () => {
    onSave({ ...thread, title, content });
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center bg-gray-700">
      <div className="bg-base-200 rounded-lg shadow-lg p-6 w-1/2">
        <h3 className="text-xl font-bold mb-4">Redigera Tråd</h3>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titel"
          className="input input-bordered w-full mb-4"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Innehåll"
          className="textarea textarea-bordered w-full mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button onClick={handleSave} className="btn btn-primary">
            Spara
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditThread;
