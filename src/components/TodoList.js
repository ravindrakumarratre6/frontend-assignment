import React, { useState } from 'react';
import "../css/Todolist.css"
function TodoList() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const markTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className='todo-conatiner'>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul className='todo-list'>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => markTaskCompleted(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} className='remove'>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {tasks.filter((task) => task.completed).length}</p>
    </div>
  );
}

export default TodoList;
