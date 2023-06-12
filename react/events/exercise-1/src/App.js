import './App.css';
import { useState } from 'react';

function Component() {
    const [json, setJson] = useState(null);
    
    async function dataRequest() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const jsonData = await response.json();
        setJson(jsonData);
    }

    return (
        <>
            <button onClick={dataRequest}>Print JSON</button>
            <p>{JSON.stringify(json)}</p>
        </>
    );
}

function App() {
    return (
        <>
            <Component></Component>    
        </>
    );
}

export default App;