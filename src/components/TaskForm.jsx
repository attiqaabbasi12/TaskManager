import { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Please enter a task title');
      return;
    }

    addTask(title, description, dueDate);

    setTitle('');
    setDescription('');
    setDueDate('');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-gray-800 p-4 rounded-lg text-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="p-2 mr-2 mb-2 rounded bg-gray-700"
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="p-2 mr-2 mb-2 rounded bg-gray-700"
      />

      <input
        type='text'
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 mr-2 mb-2 rounded bg-gray-700"
        placeholder='MM-DD-YYYY'
      />

      <button className="bg-blue-500 px-4 py-2 rounded">Add Task</button>
    </form>
  );
}

export default TaskForm;
