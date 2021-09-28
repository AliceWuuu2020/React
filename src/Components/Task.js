import { FaTimes } from 'react-icons/fa'

// This is being used in Tasks.js
const Task = ({newTask, onDelete, onToggle}) => {
    return (
        <div 
        className={`task ${newTask.reminder ? 
        'reminder' : ''}`} 
        onDoubleClick={() => onToggle(newTask.id)}>
            <h3>{newTask.text} <FaTimes style={{color: 'black', cursor: 'pointer'}} onClick={() => {onDelete(newTask.id)}}/></h3>
            <p>{newTask.day}</p>
        </div>
    )
}

export default Task
