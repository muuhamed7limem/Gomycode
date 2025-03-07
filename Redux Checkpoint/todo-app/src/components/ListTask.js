import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../redux/actions/taskActions';

const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'DONE') {
      return state.tasks.filter((task) => task.isDone);
    } else if (state.filter === 'NOT_DONE') {
      return state.tasks.filter((task) => !task.isDone);
    } else {
      return state.tasks;
    }
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(filterTasks('ALL'))}>All</button>
        <button onClick={() => dispatch(filterTasks('DONE'))}>Done</button>
        <button onClick={() => dispatch(filterTasks('NOT_DONE'))}>Not Done</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;