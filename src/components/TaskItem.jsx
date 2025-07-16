import { motion } from 'framer-motion';

function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <motion.div
      className={`p-3 rounded shadow flex justify-between items-center text-white ${
        task.completed ? 'bg-green-600' : 'bg-gray-700'
      }`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div onClick={() => toggleComplete(task.id)} className="cursor-pointer">
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm">{task.description}</p>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-300 hover:text-red-500 text-xl">
        ✕
      </button>
    </motion.div>
  );
}

export default TaskItem;
