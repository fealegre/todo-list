// export function TaskList({ tasklist, taskCompleted, taskDeleted })
import { useState } from 'react';
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

const TaskList = () => {
  const [inputTask, setInputTask] = useState('');
  const [list, setList] = useState([]);

  function handleAddTask() {
    const newTask = {
      id: Math.random(),
      task: inputTask,
      completed: false
    };

    newTask.task && setList([...list, newTask]);
    setInputTask('');
  }

  function handleDeleteTask(id) {
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  }

  function handleInputChange(event) {
    setInputTask(event.target.value);
  }

  function toggleComplete(id) {
    const newList = list.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    setList(newList)    
  }

  return (
    <div className="TodoWrapper">
      <h1>Mi Lista de Tareas</h1>

      <TaskForm
        inputTask={inputTask}
        handleInputChange={handleInputChange}
        handleAddTask={handleAddTask} />

      <ul>
        <TaskItem
          list={list}
          handleDeleteTask={handleDeleteTask}
          toggleComplete={toggleComplete} />
      </ul>
    </div>
  );
};

export default TaskList; 