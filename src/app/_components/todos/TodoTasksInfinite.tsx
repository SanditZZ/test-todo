import { getFilteredTodosStatusInfinite } from "@/app/lib/actions";
import { TodosResponse, TodoStatus } from "@/app/lib/definitions";
import { groupTasksByDate } from "@/app/lib/utils";
import ClientTasksHandler from "./ClientTasksHandler";

export default async function TodoTasksInfinite({ status }: { status: TodoStatus }) {
  const todosResponse: TodosResponse | null = await getFilteredTodosStatusInfinite(
    status,
    1,
  );
  if (!todosResponse || todosResponse.tasks.length === 0) {
    return <div>No Todos found</div>;
  }

  const { tasks } = todosResponse;

  const groupedTasks = groupTasksByDate(tasks);

  return (
    <>
      <ClientTasksHandler
        initialTasks={tasks}
        groupedTasks={groupedTasks}
        status={status}
      />
    </>
  );
}
