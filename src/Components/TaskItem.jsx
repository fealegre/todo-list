function TaskItem({ list, handleDeleteTask, toggleComplete }) {

    return (
        list.map((task) => (
            <li className="Todo" key={task.id}>
                <div className="checkbox-wrapper-33">
                    <label className="checkbox">
                        <input className="checkbox__trigger visuallyhidden" type="checkbox" id={task.id} onChange={() => toggleComplete(task.id)} />
                        <span className="checkbox__symbol">
                            <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 14l8 7L24 7"></path>
                            </svg>
                        </span>
                    </label>
                </div>
                <span className={`${task.completed ? "checked-item" : "not-checked-item"}`}>{task.task}</span>
                <button className='todo-btn' onClick={() => handleDeleteTask(task.id)}>
                    <i className="fa fa-trash-o" style={{fontSize:"24px"}}></i>
                </button>
            </li>
        ))
    )
}

export default TaskItem