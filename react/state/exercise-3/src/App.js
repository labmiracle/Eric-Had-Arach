import './App.css';
import { useState } from 'react';

function Button({action, children}){
    return <button onClick={action}>{children}</button>
}

function Text({text}) {
    return <p>Text: {text}</p>
}

function Counter() {
    const [text, setText] = useState("");
    const handleIncrement = () => setText(text + "a");
    const handleDecrement = () => setText(text.slice(0, text.length - 1));
    
    return (
        <>
            <Text text={text}></Text>
            <Button action={handleIncrement}>Increment</Button>
            <Button action={handleDecrement}>Decrement</Button>
        </>
    );
}

function App() {
    return (
        <Counter></Counter>
    );
}

export default App;