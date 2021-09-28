import Task from "./Task"

// It is being referrenced in App.js.
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                // Key needs to be included to get rid of the warning;
                // Pass onDelete to Task.js.
                <Task key={task.id} newTask={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
