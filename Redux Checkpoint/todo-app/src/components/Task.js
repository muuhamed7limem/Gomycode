import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask(task.id, editedDescription));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default Task;