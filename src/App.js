import Header from './components/header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { Fragment } from 'react'
import { useState } from 'react'
import './App.css';

function App() {
  
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointements',
        day: 'Feb 5th 2014',
        reminder: true
    },
    {
        id: 2,
        text: 'Job aplication',
        day: 'Feb 5th 2018',
        reminder: false
    }
])

 //Delete Task
 const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id)) }

 //Toggle Reminder
 const toggleReminder = (id) => {
   setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
 }
//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1021553) + 12
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <Fragment>
      <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)}/>
      {showAddTask &&  <AddTask  addTask={addTask}/>}
      <Tasks 
      tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      </div>
    </Fragment>
  );
}

export default App;
