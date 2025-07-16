import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { v4 as uuid } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  function addTask(title, description, dueDate) {
    const newTask = {
      id: uuid(),
      title,
      description,
      dueDate,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  }

  
  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  
  function toggleComplete(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
