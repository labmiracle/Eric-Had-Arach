import './App.css';
import { useState } from 'react';

function Counter() {
    const [counterState, setCounterState] = useState(0);
    const increment = () => setCounterState(counterState + 1);
    const decrement = () => setCounterState(counterState - 1);

    return (
        <>
            <p>Counter: {counterState}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}

function App() {
    return (
        <Counter></Counter>
    );
}

export default App;