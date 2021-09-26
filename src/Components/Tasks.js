import Task from "./Task"

// It is being referrenced in App.js.
const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map((task) => (
                // Key needs to be included to get rid of the warning.
                <Task key={task.id} newTask={task}/>
            ))}
        </>
    )
}

export default Tasks
