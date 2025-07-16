import { motion } from "framer-motion";

function TaskItem({ task, deleteTask, toggleComplete }) {
  const today = new Date();
  const isOverdue =
    task.dueDate && !task.completed && new Date(task.dueDate) < today;

  const bgColor = task.completed
    ? "bg-green-500"
    : isOverdue
    ? "bg-red-500"
    : "bg-gray-700";

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function capitalizeAllWords(str) {
    return str
      .split(" ")
      .map((word) => capitalize(word))
      .join(" ");
  }

  return (
    <motion.div
      className={`p-3 px-6 rounded shadow flex justify-between items-center text-white ${bgColor}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div onClick={() => toggleComplete(task.id)} className="cursor-pointer">
        <h3 className="font-bold">{capitalizeAllWords(task.title)}</h3>
        <p className="text-sm">{task.description}</p>
        {task.dueDate && (
          <p className="text-xs text-gray-300">
            Due: {task.dueDate}
            {isOverdue && " (Overdue)"}
          </p>
        )}
      </div>
      <div>
        <button
          onClick={() => toggleComplete(task.id)}
          className="text-white hover:text-blue-600 text-xl"
        >
          ✔
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-white hover:text-blue-600 font-bold text-xl ml-4"
        >
          ✕
        </button>
      </div>
    </motion.div>
  );
}

export default TaskItem;
