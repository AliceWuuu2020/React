import { FaTimes } from 'react-icons/fa'

// This is being used in Tasks.js
const Task = ({newTask, onDelete}) => {
    return (
        <div className='task'>
            <h3>{newTask.text} <FaTimes style={{color: 'black', cursor: 'pointer'}} onClick={() => {onDelete(newTask.id)}}/></h3>
            <p>{newTask.day}</p>
        </div>
    )
}

export default Task
