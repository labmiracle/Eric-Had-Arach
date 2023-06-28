import React, { useRef } from 'react';

function Form() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const valueFiel1 = ref1.current.value;
        const valueFiel2 = ref2.current.value;
        console.log('Value field 1:', valueFiel1);
        console.log('Value field 2:', valueFiel2);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Field 1:
                <input type="text" ref={ref1} />
            </label>
            <label>
                Field 2:
                <input type="text" ref={ref2} />
            </label>
            <button type="submit">Send</button>
        </form>
  );
}

export default function App() {
    return <Form />;
}
