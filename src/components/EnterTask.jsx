import axios from "axios";
import React, { useState } from "react";

function EnterTask({ onClose }) {
  const [title, setTitle] = useState("");
  const [duedate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      description,
      duedate,
      title,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/task/save",
        newTask
      );
      console.log("Task Added:", response.data);
      alert("Task saved successfully!");
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <div className="fixed top-50 left-2/5 w-96 bg-purple-200 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Title</h2>
          <input
            type="text"
            placeholder="Enter task name"
            className="border p-2 w-full rounded mb-4"
            onChange={(event) => setTitle(event.target.value)}
          />
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <input
            type="text"
            placeholder="Enter Description"
            className="border p-2 w-full rounded mb-4"
            onChange={(event) => setDescription(event.target.value)}
          />
          <h2 className="text-xl font-bold mb-4">Date</h2>
          <input
            type="date"
            placeholder="Enter task name"
            className="border p-2 w-full rounded mb-4"
            onChange={(event) => setDueDate(event.target.value)}
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="bg-gray-400 px-4 py-2 rounded text-white"
            >
              Cancel
            </button>
            <button type="submit" className="bg-purple-500 px-4 py-2 rounded text-white">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnterTask;
