import React from "react";

function EnterTask({ onClose }) {
  return (
    <div className="fixed top-50 left-2/5 w-96 bg-purple-200 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Title</h2>
        <input
          type="text"
          placeholder="Enter task name"
          className="border p-2 w-full rounded mb-4"
        />
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <input
          type="text"
          placeholder="Enter Description"
          className="border p-2 w-full rounded mb-4"
        />
        <h2 className="text-xl font-bold mb-4">Date</h2>
        <input
          type="date"
          placeholder="Enter task name"
          className="border p-2 w-full rounded mb-4"
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-400 px-4 py-2 rounded text-white"
          >
            Cancel
          </button>
          <button className="bg-purple-500 px-4 py-2 rounded text-white">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterTask;
