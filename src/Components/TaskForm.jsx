// eslint-disable-next-line react/prop-types
function TaskForm({inputTask, handleInputChange, handleAddTask}) {

  return (
    <div className="TodoForm">
      <input className="todo-input" type="text" value={inputTask}
        onChange={handleInputChange} placeholder="Ingrese una tarea" />

      <button className='todo-btn' onClick={handleAddTask}>Agregar</button>
    </div>
  )
}

export default TaskForm