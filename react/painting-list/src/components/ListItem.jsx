import { useState } from "react";
import RemoveTaskButton from "./RemoveTaskButton";

export function ListItem({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.title}
          onChange={(e) => {
            onChange({
              ...task,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      {taskContent}
      <RemoveTaskButton onDelete={onDelete} task={task} />
    </label>
  );
}