import './App.css';
import { useState } from 'react';

function Counter() {
    const [counterState, setCounterState] = useState(0);
    const handleIncrement = () => setCounterState(counterState + 1);
    const handleDecrement = () => setCounterState(counterState - 1);

    return (
        <>
            <p>Counter: {counterState}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}

function App() {
    return (
        <Counter></Counter>
    );
}

export default App;