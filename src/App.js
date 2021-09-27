import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState(
    [{
      id: 1,
      text: 'Do yoga',
      day: '26th September 2021',
      reminder: true
    },
    {
      id: 2,
      text: 'Go shopping with Waw Ong',
      day: '27th September 2021',
      reminder: true
    }]
  )

  // Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    // console.log('delete', id)
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default App;
