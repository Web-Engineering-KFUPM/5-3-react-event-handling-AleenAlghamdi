import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks = [] }) {
    if (tasks.length === 0) {
        return <p className="empty">No tasks yet. Add your first task 👇</p>;
    }
  return (
    <ul className="list">
      {/* Task 2 – Display Placeholder if No Tasks Yet */}
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
        ))}
      {/* Task 2 & 3 – Map tasks to TaskItem */}
      
    </ul>
  );
}
