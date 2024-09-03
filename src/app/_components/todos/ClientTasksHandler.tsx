"use client";

import { useState } from "react";
import { Todo, TodoStatus } from "@/app/lib/definitions";
import LoadMoreTodos from "./LoadMoreTodos";
import TasksGroup from "./TasksGroup";
import { groupTasksByDate } from "@/app/lib/utils";

interface ClientTasksHandlerProps {
  initialTasks: Todo[];
  groupedTasks: Record<string, Todo[]>;
  status: TodoStatus;
}

export default function ClientTasksHandler({
  initialTasks,
  groupedTasks,
  status,
}: ClientTasksHandlerProps) {
  const [allTasks, setAllTasks] = useState<Todo[]>(initialTasks);
  const [groupedTasksState, setGroupedTasksState] = useState(groupedTasks);

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = allTasks.filter((task) => task.id !== taskId);
    setAllTasks(updatedTasks);
    setGroupedTasksState(groupTasksByDate(updatedTasks));
  };

  const handleNewTasks = (newTasks: Todo[]) => {
    const combinedTasks = [...allTasks, ...newTasks];
    setAllTasks(combinedTasks);
    setGroupedTasksState(groupTasksByDate(combinedTasks));
  };

  return (
    <>
      <TasksGroup groupedTasks={groupedTasksState} onDeleteTask={handleDeleteTask} />
      <LoadMoreTodos status={status} onNewTasks={handleNewTasks} />
    </>
  );
}
