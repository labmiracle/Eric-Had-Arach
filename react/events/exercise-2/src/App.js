import { useState } from 'react';

function Input() {
    const [text, setText] = useState('');

    function handleTextInput(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input type="text" value={text} onChange={handleTextInput} />
            <p>{text}</p>
        </>
    );
}

export default function App() {
    return (
        <>
            <Input />
        </>
    );
}