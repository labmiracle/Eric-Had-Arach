import { useState, useEffect } from 'react'
import './App.css'

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.title}</li>)}
      </ul>
    </>
    
  );
}

function App() {
  return <Tasks />;
}

export default App
