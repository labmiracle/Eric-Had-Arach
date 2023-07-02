import { useEffect, useState } from 'react'

import './App.css'

function Component() {
  useEffect(() => {
    return () => { 
      console.log('Desmontado!');
    };
  }, []);

  return <p>Component text</p>;
}

function App() {
  const [showComponent, setShowComponent] = useState(true); 

  function handleShowComponent() {
    setShowComponent(!showComponent);
  }
  
  return (
    <>
      {showComponent && <Component />}
      <button onClick={handleShowComponent}>
        {showComponent ? "Hide component" : "Show component"}
      </button>
    </>
  );
}

export default App
