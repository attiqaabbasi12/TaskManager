import TaskItem from './TaskItem';
import { AnimatePresence } from 'framer-motion';

function TaskList({ tasks, filter, deleteTask, toggleComplete }) {
  let visibleTasks = tasks.slice(); // copy tasks

  // Sort tasks by due date
  visibleTasks.sort((a, b) => {
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  // Filter after sorting
  if (filter === 'completed') {
    visibleTasks = visibleTasks.filter(task => task.completed);
  } else if (filter === 'pending') {
    visibleTasks = visibleTasks.filter(task => !task.completed);
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
