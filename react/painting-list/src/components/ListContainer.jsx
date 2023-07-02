import { useState } from "react";
import List from "./List";
import AddTaskButton from "./AddTaskButton.jsx";

let nextId = 1;
const initialTasks = [
    { id: 0, title: "Go to the supermarkey" }
];

export default function ListContainer() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(title) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        title: title,
      },
    ]);
  }

  function handleChangeTask(nextTask) {
    setTasks(
      tasks.map((t) => {
        if (t.id === nextTask.id) {
          return nextTask;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <AddTaskButton onAddTask={handleAddTask} />
      <List
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}