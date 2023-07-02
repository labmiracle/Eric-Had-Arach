import { useState, useEffect } from 'react'
import './App.css'

function Component(props) {
  useEffect(() => {
    console.log('Actualizando!');
  }, [props]); 

  return <p>The number is {props.number}</p>
}
  
function App() {
  const [number, setNumber] = useState(1);

  function handleIncrementNumber() {
    setNumber(number + 1);
  }
  return (
    <>
      <Component number={number}></Component>
      <button onClick={handleIncrementNumber}>Change prop/number</button>
    </>
    
  );
}

export default App
