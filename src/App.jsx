import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { v4 as uuid } from 'uuid'; 

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  //load tasks when app starts
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  //save changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title, description) {
    const newTask = {
      id: uuid(),
      title: title,
      description: description,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  }

  function deleteTask(id) {
    const newList = tasks.filter(task => task.id !== id);
    setTasks(newList);
  }

  function toggleComplete(id) {
    const newList = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newList);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl text-center font-bold mb-6">Task Manager App</h1>

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
