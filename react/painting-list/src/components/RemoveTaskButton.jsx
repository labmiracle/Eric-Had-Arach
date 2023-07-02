export default function RemoveTaskButton({ onDelete, task }) {
    return (
      <button 
        onClick={() => onDelete(task.id)}>
          Delete
      </button>
    );
  }