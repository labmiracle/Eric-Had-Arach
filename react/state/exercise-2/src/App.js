import './App.css';
import { useState } from 'react';

function Text() {
    const [text, setText] = useState("");
    const handleIncrement = () => setText(text + "a");
    const handleDecrement = () => setText(text.slice(0, text.length - 1));
    
    return (
        <>
            <p>Text: {text}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>DEcrement</button>
        </>
    );
}

function App() {
    return (
        <Text></Text>
    );
}

export default App;