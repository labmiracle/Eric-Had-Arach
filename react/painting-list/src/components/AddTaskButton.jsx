import { useState } from "react";
import InputText from "./InputText";

export default function AddTaskButton({ onAddTask }) {
  const [title, setTitle] = useState("");
  
  function handleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <>
      <InputText
        msn={"Write the task"}
        value={title}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTask(title);
        }}
      >
        Add
      </button>
    </>
  );
}