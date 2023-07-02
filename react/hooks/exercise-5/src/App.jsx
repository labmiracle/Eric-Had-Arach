import { useState, useEffect } from 'react'
import './App.css'

function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

  return tasks;
}

function App() {
  const tasks = useTasks();
  
  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.title}</li>)}
      </ul>
    </>
    
  );
}

export default App
