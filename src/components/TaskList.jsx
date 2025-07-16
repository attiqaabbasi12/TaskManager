import TaskItem from './TaskItem';
import { AnimatePresence } from 'framer-motion';

function TaskList({ tasks, filter, deleteTask, toggleComplete }) {
  // Only show tasks based on selected filter
  let visibleTasks = [];

  if (filter === 'all') {
    visibleTasks = tasks;
  } else if (filter === 'completed') {
    visibleTasks = tasks.filter(task => task.completed);
  } else if (filter === 'pending') {
    visibleTasks = tasks.filter(task => !task.completed);
  }

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {visibleTasks.length === 0 ? (
          <p className="text-center text-gray-400">No tasks to show.</p>
        ) : (
          visibleTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))
        )}
      </AnimatePresence>
    </div>
  );
}

export default TaskList;
