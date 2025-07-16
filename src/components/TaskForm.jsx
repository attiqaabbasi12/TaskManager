import { useState } from 'react';

function TaskForm({ addTask }) {
  // These are like textboxes
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Don't add empty tasks
    if (title.trim() === '') {
      alert('Please type a task title');
      return;
    }

    // Call the function from App.jsx
    addTask(title, description);

    // Clear input boxes
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-gray-800 p-4 rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="p-2 mr-2 rounded bg-gray-700"
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        className="p-2 mr-2 rounded bg-gray-700"
      />

      <button className="bg-blue-500 px-4 py-2 rounded">Add</button>
    </form>
  );
}

export default TaskForm;
