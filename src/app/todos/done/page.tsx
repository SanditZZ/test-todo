import { TodoTasksSkeleton } from "@/app/_components/skeletons";
import TodoHeader from "@/app/_components/todos/TodoHeader";
import TodoTasksInfinite from "@/app/_components/todos/TodoTasksInfinite";
import { TodoStatus } from "@/app/lib/definitions";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "DONE Tasks",
};

export default async function page() {
  return (
    <>
      <TodoHeader title="DONE Tasks" />

      <Suspense fallback={<TodoTasksSkeleton />}>
        <TodoTasksInfinite status={TodoStatus.DONE} />
      </Suspense>
    </>
  );
}
