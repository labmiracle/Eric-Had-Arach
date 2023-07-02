import { useState } from 'react'
import './App.css'

function Input() {
  const [text, setText] = useState('');

  function handleChange(e) {
    const currentText = e.target.value;
    const newText = currentText.replace(/a/g, 'b');
    setText(newText);
  }

  return (
    <input type="text" value={text} onChange={handleChange}
    />
  );
}

export default function App() {
  return (
    <Input />
  );
}


