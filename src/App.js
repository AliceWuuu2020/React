// Create a production build: 
// npm run build (a folder called build is created for production)
// npm i -g serve
// serve -s build -p 8000
// npm i json-server (package.json file is created)
// Add a new line in package.json: "server": "json-server --watch db.json --port 5000"
// npm run server (db.json file is created)
import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])
    // [{
    //   id: 1,
    //   text: 'Do yoga',
    //   day: '26th September 2021',
    //   reminder: true
    // },
    // {
    //   id: 2,
    //   text: 'Go shopping with Waw Ong',
    //   day: '27th September 2021',
    //   reminder: true
    // }]
  // )
  
  // Add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    // console.log('delete', id)
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder}: task))
  }

  return (
    <div className='container'>
      <Header buttonText={!showAddTask} clickMe={() => setShowAddTask(!showAddTask)}/>
      {/* The below is equal to an if statement. */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      : 'No Task :('}
    </div>
  )
}

export default App;
