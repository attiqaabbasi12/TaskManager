function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      <button
        className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500' : 'bg-gray-700'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500' : 'bg-gray-700'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-500' : 'bg-gray-700'}`}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
  );
}

export default TaskFilter;
