import { getFilteredTodosStatus } from "@/app/lib/actions";
import { TodosResponse, TodoStatus } from "@/app/lib/definitions";
import { groupTasksByDate } from "@/app/lib/utils";

export default async function TodoTasks({ status }: { status: TodoStatus }) {
  const todosResponse: TodosResponse | null = await getFilteredTodosStatus(status);
  if (!todosResponse || todosResponse.tasks.length === 0) {
    return <div>No Todos found</div>;
  }

  const { tasks } = todosResponse;

  const groupedTasks = groupTasksByDate(tasks);

  return (
    <ul className="space-y-8">
      {Object.entries(groupedTasks).map(([date, tasks]) => (
        <li className="space-y-4" key={date}>
          <h2 className="text-xl font-semibold">{date}</h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="w-full select-none p-4 border-gray-200/50 bg-slate-200/50 border shadow-md rounded-lg"
              >
                <h3 className="text-lg font-bold">{task.title}</h3>
                <p className="text-sm">{task.description}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
