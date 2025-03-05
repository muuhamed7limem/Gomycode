// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [name, setName] = useState(taskToEdit ? taskToEdit.name : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setError('Both fields are required.');
      return;
    }

    if (taskToEdit) {
      editTask({ ...taskToEdit, name, description });
      clearEdit();
    } else {
      addTask({ name, description, completed: false });
    }

    setName('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default TaskForm;