import { Todo } from "@/app/lib/definitions";
import dayjs from "dayjs";

export const groupTasksByDate = (tasks: Todo[]) => {
  return tasks.reduce((acc, task) => {
    const date = dayjs(task.createdAt).format("DD MMM YYYY");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {} as Record<string, Todo[]>);
};
