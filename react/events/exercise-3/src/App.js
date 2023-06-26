import { useState } from 'react';

function Select() {
    const [selectedValue, setSelectedValue] = useState('');

    function handleSelectedValue(e) {
        setSelectedValue(e.target.value);
    }

    return (
        <>
            <select name="values" onChange={handleSelectedValue}>
                <option value="pedro">Pedro</option>
                <option value="jorge">Jorge</option>
                <option value="mariano">Mariano</option>
            </select>
            <p>Selected value: {selectedValue}</p>
        </>
    );

}

export default function App() {
    return (
        <Select />
    );
}
