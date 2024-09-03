"use client";

import { Todo } from "@/app/lib/definitions";
import React, { useState } from "react";
import DeleteTaskBtn from "../buttons/DeleteTaskBtn";

export default function TasksGroup({
  groupedTasks,
  onDeleteTask,
}: {
  groupedTasks: Record<string, Todo[]>;
  onDeleteTask: (taskId: string) => void;
}) {
  const [tasksByDate, setTasksByDate] = useState(groupedTasks);

  const handleDeleteTask = (taskId: string) => {
    const updatedTasksByDate = {
      ...tasksByDate,
    };

    Object.keys(updatedTasksByDate).forEach((date) => {
      updatedTasksByDate[date] = updatedTasksByDate[date].filter(
        (task) => task.id !== taskId,
      );

      if (updatedTasksByDate[date].length === 0) {
        delete updatedTasksByDate[date];
      }
    });

    setTasksByDate(updatedTasksByDate);
  };

  return (
    <ul className="space-y-8">
      {Object.entries(groupedTasks).map(([date, tasks]) => (
        <li className="space-y-4" key={date}>
          <h2 className="text-xl font-semibold">{date}</h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="w-full flex justify-between md:pr-10 md:pl-6 select-none p-4 border-gray-200/50 bg-slate-200/50 border shadow-md rounded-lg"
              >
                <div className="flex flex-col md:max-w-[600px]">
                  <h3 className="text-lg font-bold">{task.title}</h3>
                  <p className="text-sm line-clamp-2">{task.description}</p>
                </div>
                <div className="flex">
                  <DeleteTaskBtn onDelete={() => onDeleteTask(task.id)} />
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
